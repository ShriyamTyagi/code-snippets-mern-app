const mongoose = require("mongoose");

const DB_STRING = `mongodb+srv://codesnippets:${process.env.DATABASE_PASSWORD}@cluster0.03fml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const initDB = async () => {
  try {
    await mongoose.connect(DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (err) {
    console.log("Database connection error", err);
  }

  const { setupModels } = require("./model");
  try {
    setupModels();
    console.log("Models Loaded");
  } catch (err) {
    console.error(err);
  }
};

module.exports = initDB;
