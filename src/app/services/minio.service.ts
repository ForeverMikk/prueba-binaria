// import * as Minio from "minio";

// // var Minio = require('minio')

// var minioClient = new Minio.Client({
//   endPoint: "s3.binahriaanalytics.ninja",
//   port: 9000,
//   useSSL: true,
//   accessKey: "S3_Binahria_T",
//   secretKey: "uVgsuanjRDhvyjIoNnwf",
// });

// export const listOfBuckets = () => {
//   minioClient.listBuckets(function (err, buckets) {
//     if (err) return console.log(err);
//     console.log("buckets :", buckets);
//   });
// };

// export const uploadFile = (file) => {
//   var metaData = {
//     "Content-Type": "application/octet-stream",
//     "X-Amz-Meta-Testing": 1234,
//     example: 5678,
//   };

//   // Using fPutObject API upload your file to the bucket europetrip.
//   minioClient.fPutObject(
//     "europetrip",
//     file.name,
//     file,
//     metaData,
//     function (err, etag) {
//       if (err) return console.log(err);
//       console.log("File uploaded successfully.", file);
//     }
//   );
// };
