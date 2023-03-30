const app = require("../index");
const request = require("supertest");

describe.skip("GET: /api/s3", () => {
  test("When making a call to the endpoint /api/s3, should return bucket objects", () => {
    return request(app)
      .get("/api/s3")
      .expect(200)
      .then((result) => {
        expect(result.body).toBeInstanceOf(Array);
      });
  });
});
