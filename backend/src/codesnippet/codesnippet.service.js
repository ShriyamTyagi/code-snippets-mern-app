const { models } = require("../model")

const getCodeSnippets = () => {
     const {codesnippet} = models
     return codesnippet.find()
}

module.exports = {
    getCodeSnippets
}