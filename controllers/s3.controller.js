const { retrieveAllObjects } = require("../models/s3.model");

exports.getAllObjects = (req, res, next) => {
  retrieveAllObjects().then((result) => {
    res.status(200).send({ objects: result });
  });
};
