const app = require("express").Router()
const {getCodeSnippets} = require("./codesnippet.controller")

const routeMapping = [
	{
		route: "/",
		controller: getCodeSnippets,
		method: "get",
		middlewares: []
	},
]

module.exports = () => {
	routeMapping.forEach((mapping) => {
		app[mapping.method](
			mapping.route,
			...mapping.middlewares,
			mapping.controller,
		)
	})
	return app
}
