const express = require("express");
const { getAllObjects, postObject } = require("../controllers/s3.controller");

const s3Router = express.Router();

s3Router.use("/", getAllObjects);
s3Router.post("/", postObject);

module.exports = s3Router;
