const { getAllS3Objects, postNewObject } = require("../utils/s3");
const fs = require("fs/promises");
const { mockClient } = require("aws-sdk-client-mock");
const {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");

const s3Mock = mockClient(S3Client);

beforeEach(() => {
  s3Mock.reset();
});

describe("getAllS3Objects", () => {
  test("When function is called, should return a list of objects inside the requested bucket", async () => {
    s3Mock.on(ListObjectsCommand).resolves({
      objects: [
        {
          url: "https://s3-eu-west-2.amazonaws.com/aws-file-storage-stevo/Payslip%20Month%20Ending%2031%20January%202020.pdf",
          key: "Payslip Month Ending 31 January 2020.pdf",
          size: 91868,
        },
        {
          url: "https://s3-eu-west-2.amazonaws.com/aws-file-storage-stevo/uploadTest.txt",
          key: "uploadTest.txt",
          size: 42,
        },
      ],
    });
    const func = await getAllS3Objects();

    expect(func).toBeInstanceOf(Object);
  });
});

describe("postNewObject", () => {
  test("When function is called with a file, should post to s3", async () => {
    s3Mock.on(PutObjectCommand).resolves({});
    const input = await fs.readFile(
      __dirname + "/testData/files/uploadTest.txt",
      "utf8"
    );
    const fileName = "uploadTest.txt";
    const func = await postNewObject(input, fileName);

    expect(func).toBeInstanceOf(Object);
  });
});
