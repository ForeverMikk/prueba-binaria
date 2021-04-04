import { Injectable } from '@angular/core';

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor() {}
}

function uploadFile(file: any) {
  const contentType = file.type;

  const bucket = new S3({
    endpoint: '',
    accessKeyId: 'YOUR-ACCESS-KEY-ID',
    secretAccessKey: 'YOUR-SECRET-ACCESS-KEY',
    region: 'YOUR-REGION',
  });

  const params = {
    Bucket: 'YOUR-BUCKET-NAME',
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