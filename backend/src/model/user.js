const mongoose = require("mongoose");
const crypto = require("crypto");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    codeSnippets: [{ type: Schema.Types.ObjectId, ref: "codesnippet" }],
  },
  {
    timestamps: true,
  }
);

userSchema
  .virtual("password")
  .set(function (password) {
    // create a temp variable
    this._password = password;
    // generate salt
    this.salt = this.makeSalt();
    // encrypt password
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    console.log(this.hashedPassword);
    return this.encryptPassword(plainText) === this.hashedPassword;
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },

  encryptPassword: function (password) {
    if (!password) return "";
    return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
  },
};

module.exports = userSchema;
