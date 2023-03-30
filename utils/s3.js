const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");
require("dotenv").config();

const client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const getAllS3Objects = async () => {
  const input = { Bucket: process.env.BUCKET_NAME };
  const command = new ListObjectsCommand(input);
  try {
    const response = await client.send(command);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createObjectURLs = (arrayOfObjects) => {
  return arrayOfObjects.map((object) => {
    const urlWithSpaces = `https://s3-${process.env.AWS_REGION}.amazonaws.com/${process.env.BUCKET_NAME}/${object.Key}`;
    return {
      url: urlWithSpaces.replace(/\s/g, ""),
      key: object.Key,
      size: object.Size,
    };
  });
};
module.exports = { getAllS3Objects, createObjectURLs };
