const express = require("express");
require("dotenv").config();
const apiRouter = require("./routers/api.router");
const app = express();

app.use("/api", apiRouter);

module.exports = app;
