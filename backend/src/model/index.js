const mongoose = require("mongoose");
const fs = require("fs");
const Boom = require("@hapi/boom");

let models = {};

const setupModels = function () {
  if (mongoose.connection.readyState === 1) {
    let readdirlist = fs.readdirSync("./src/model");
    let schema;
    readdirlist.forEach((file) => {
      if (file !== "index.js") {
        schema = require(`./${file}`);
        file = file.replace(".js", "");
        models[file] = mongoose.model(file, schema);
        console.log(`Model Loaded: ${file}`);
      }
    });
    return models;
  } else {
    throw Boom.internal("Failed Loading Models");
  }
};

module.exports = {
  setupModels,
  models,
};
