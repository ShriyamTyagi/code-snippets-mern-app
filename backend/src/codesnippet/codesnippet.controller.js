const codesnippetService = require("./codesnippet.service")

const getCodeSnippets = async (req,res,next) => {
	try {
		const data = await codesnippetService.getCodeSnippets()
		return res.json(data)
	} catch (err) {
		return next(err)
	}
}

module.exports = {
    getCodeSnippets
}