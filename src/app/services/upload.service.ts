import { Injectable } from '@angular/core';

// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';
// import './minio.js';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor() {}

  uploadFile(file: any) {
    const contentType = file.type;

    this.uploadFile(file);
  }

  createBucket() {}
}
