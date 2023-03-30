const { getAllS3Objects, createObjectURLs } = require("../utils/s3");

exports.retrieveAllObjects = async () => {
  const s3Objects = await getAllS3Objects();
  const objectsWithUrls = await createObjectURLs(s3Objects.Contents);
  return objectsWithUrls;
};

exports.sendNewObject = async () => {};
