const {Schema} = require("mongoose")


const codeSnippetSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    }
})

module.exports = codeSnippetSchema