const { validationResult } = require("express-validator");
const Boom = require("@hapi/boom");

const validate = (validationMiddleware) => {
  let validateFunction = (req, _res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw Boom.badRequest(errors.array()[0].msg);
      }
      return next();
    } catch (err) {
      return next(err);
    }
  };

  return [validationMiddleware, validateFunction];
};
module.exports = validate;
