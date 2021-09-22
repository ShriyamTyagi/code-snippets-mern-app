const express = require("express");
const cors = require("cors");
const setupRoutes = require("./routes");
const globalErrorHandler = require("./utils/global-error-handler");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", setupRoutes());

app.use("*", (req, res) => {
  return res
    .status(404)
    .json({ error: { message: "not found" }, is_success: false });
});

//error handling
app.use(globalErrorHandler());

module.exports = app;
