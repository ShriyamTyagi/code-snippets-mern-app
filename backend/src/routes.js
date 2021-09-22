const app = require("express").Router();

const modules = ["codesnippet", "user"];

module.exports = () => {
  modules.forEach((module) => {
    app.use(`/${module}`, require(`./${module}/${module}.route.js`)());
  });
  return app;
};
