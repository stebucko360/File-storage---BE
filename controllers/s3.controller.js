const { retrieveAllObjects, sendNewObject } = require("../models/s3.model");

exports.getAllObjects = (req, res, next) => {
  retrieveAllObjects().then((result) => {
    res.status(200).send({ objects: result });
  });
};

exports.postObject = (req, res, next) => {
  const { fileName, content } = req.body;
  sendNewObject(fileName, content).then((result) => {
    res.status(202).send({ objects: result });
  });
};
