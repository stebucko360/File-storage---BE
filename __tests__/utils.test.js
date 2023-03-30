const { getAllS3Objects } = require("../utils/s3");

describe("getAllS3Objects", () => {
  test("When function is called, should return a list of objects inside the requested bucket", async () => {
    const func = await getAllS3Objects();

    expect(func).toBeInstanceOf(Object);
  });
});
