const express = require("express");
const s3Router = require("./s3.router");

const apiRouter = express.Router();

apiRouter.use("/s3", s3Router);

module.exports = apiRouter;
