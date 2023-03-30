const { getAllS3Objects, postNewObject } = require("../utils/s3");
const fs = require("fs/promises");

describe("getAllS3Objects", () => {
  test("When function is called, should return a list of objects inside the requested bucket", async () => {
    const func = await getAllS3Objects();

    expect(func).toBeInstanceOf(Object);
  });
});

describe("postNewObject", () => {
  test("When function is called with a file, should post to s3", async () => {
    const input = await fs.readFile(
      __dirname + "/testData/files/uploadTest.txt",
      "utf8"
    );
    const fileName = "uploadTest.txt";
    const func = await postNewObject(input, fileName);

    expect(func).toBeInstanceOf(Object);
  });
});
