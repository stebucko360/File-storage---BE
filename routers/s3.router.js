const express = require("express");
const { getAllObjects } = require("../controllers/s3.controller");

const s3Router = express.Router();

s3Router.use("/", getAllObjects);

module.exports = s3Router;
