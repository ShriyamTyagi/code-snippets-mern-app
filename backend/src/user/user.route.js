const app = require("express").Router();
const { signup, login, addSnippet, getSnippets } = require("./user.controller");
const validate = require("../utils/validation-middleware");
const { validationMiddlewares, protect } = require("./user.middlewares");

const routeMapping = [
  {
    route: "/signup",
    controller: signup,
    method: "post",
    middlewares: [...validate(validationMiddlewares.userSignupValidator)],
  },
  {
    route: "/login",
    controller: login,
    method: "post",
    middlewares: [...validate(validationMiddlewares.userLoginValidator)],
  },
  {
    route: "/addsnippet/:id",
    controller: addSnippet,
    method: "get",
    middlewares: [
      protect,
      ...validate(validationMiddlewares.addSnippetValidator),
    ],
  },
  {
    route: "/getsnippets",
    controller: getSnippets,
    method: "get",
    middlewares: [protect],
  },
];

module.exports = () => {
  routeMapping.forEach((mapping) => {
    app[mapping.method](
      mapping.route,
      ...mapping.middlewares,
      mapping.controller
    );
  });
  return app;
};
