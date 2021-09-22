const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const { models } = require("../model");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const signup = async (body) => {
  const { user: User } = models;

  try {
    const newUser = await User.create({
      name: body.name,
      email: body.email,
      password: body.password,
    });

    const token = signToken(newUser._id);

    newUser.hashedPassword = undefined;
    newUser.salt = undefined;
    newUser.__v == undefined;
    return { user: newUser, token };
  } catch (err) {
    throw err;
  }
};

const login = async (body) => {
  const { user: User } = models;

  const { email, password } = body;

  // 1) Check if email and password exist
  if (!email || !password) {
    throw boom.badRequest("Please provide email and password!", 400);
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email });

  if (!user || !user.authenticate(password)) {
    console.log(user.authenticate(password));
    throw boom.badRequest("Incorrect email or password", 400);
  }

  const token = signToken(user._id);

  user.hashedPassword = undefined;
  user.salt = undefined;
  user.__v == undefined;

  return {
    user,
    token,
  };
};

const addSnippet = async (snippetid, userid) => {
  const { user: User } = models;
  const { codesnippet: CodeSnippet } = models;

  const codeSnippet = await CodeSnippet.findById(snippetid);

  if (!codeSnippet) {
    throw boom.badRequest("snippet not found with given id");
  }

  const user = await User.findOneAndUpdate(
    { _id: userid },
    { $push: { codeSnippets: snippetid } },
    {
      new: true,
    }
  );

  user.hashedPassword = undefined;
  user.salt = undefined;
  return user;
};

const getSnippets = async (userid) => {
  const { user: User } = models;
  console.log(userid);
  const userSnippets = await User.findById(userid).populate("codeSnippets");
  return userSnippets.codeSnippets;
};

module.exports = {
  signup,
  login,
  addSnippet,
  getSnippets,
};
