const userService = require("./user.service");

const signup = async (req, res, next) => {
  try {
    const data = await userService.signup(req.body);
    return res.status(200).json({
      token: data.token,
      user: data.user,
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const data = await userService.login(req.body);
    return res.status(200).json({
      token: data.token,
      user: data.user,
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const addSnippet = async (req, res, next) => {
  const { id } = req.params;
  const userid = req.user.id;
  console.log(id);
  try {
    const data = await userService.addSnippet(id, userid);
    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const getSnippets = async (req, res, next) => {
  const userid = req.user.id;
  try {
    const data = await userService.getSnippets(userid);
    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = {
  signup,
  login,
  addSnippet,
  getSnippets,
};
