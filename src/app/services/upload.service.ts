import { Injectable } from '@angular/core';

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor() {}

  uploadFile(file: any) {
    const contentType = file.type;

    const bucket = new S3({
      endpoint: 's3.binahriaanalytics.ninja',
      accessKeyId: 'S3_Binahria_T',
      secretAccessKey: 'uVgsuanjRDhvyjIoNnwf',
    });

    const params = {
      Bucket: 's3.binahriaanalytics.ninja',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
    };

    bucket.upload(params, function (err: any, data: any) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
}
