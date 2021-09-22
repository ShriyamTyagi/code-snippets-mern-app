const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { check } = require("express-validator");
const { models } = require("../model");

const protect = async (req, res, next) => {
  let token;

  const { user: User } = models;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      boom.unauthorized("You are not loggedin , log in to get access")
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      boom.unauthorized(
        "The user belonging to this token does no longer exist",
        401
      )
    );
  }
  req.user = currentUser;
  next();
};

const validationMiddlewares = {
  userSignupValidator: [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Must be a valid email address"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userLoginValidator: [
    check("email")
      .not()
      .isEmpty()
      .withMessage("Please provide email and password"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Please provide email and password"),
  ],
  addSnippetValidator: [
    check("id").isMongoId().withMessage("`snippet_id` is invalid"),
  ],
};

module.exports = {
  protect,
  validationMiddlewares,
};
