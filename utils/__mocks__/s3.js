const getAllS3Objects = async () => {
  return Promise.resolve({
    $metadata: {
      httpStatusCode: 200,
      requestId: "82C9C30XE1NZ2CXH",
      extendedRequestId:
        "ndIJg3d+1bb7jNod07TahIVGlE1biNuYQyOTaOMyjPgcKcOvwcx00JRrjk84emI2VHky5Ud7xZ4=",
      cfId: undefined,
      attempts: 1,
      totalRetryDelay: 0,
    },
    Contents: [
      {
        Key: "Test File",
        LastModified: "2023-03-30T20:25:47.000Z",
        ETag: '"2d3ba8dfb478c46a88f0c818108b473d"',
        Size: 91868,
        StorageClass: "STANDARD",
        Owner: [Object],
      },
      {
        Key: "uploadTest.txt",
        LastModified: "2023-03-30T21:36:17.000Z",
        ETag: '"e092fef0f31194166e7512969860acec"',
        Size: 42,
        StorageClass: "STANDARD",
        Owner: [Object],
      },
    ],
    IsTruncated: false,
    Marker: "",
    MaxKeys: 1000,
    Name: "aws-file-storage-stevo",
    Prefix: "",
  });
};

module.exports = { getAllS3Objects };
