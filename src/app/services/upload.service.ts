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
      // endpoint: 's3.binahriaanalytics.ninja',
      accessKeyId: 'S3_Binahria_T',
      secretAccessKey: 'uVgsuanjRDhvyjIoNnwf',
    });

    const params = {
      Bucket: 'binahriaanalytics.ninja',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
    };

    bucket.upload(params, function (err: any, data: any) {
      if (err) {
        console.log('Hubo un error al subir el Archivo: ', err);
        return false;
      }
      console.log('El Archivo se subio con exito', data);
      return true;
    });
  }

  createBucket() {
    const params = {
      Bucket: 'binahriaanalytics.ninja',
      CreateBucketConfiguration: {
        LocationConstraint: 'eu-west-1',
      },
    };

    const s3 = new S3({
      accessKeyId: 'S3_Binahria_T',
      secretAccessKey: 'uVgsuanjRDhvyjIoNnwf',
    });

    s3.createBucket(params, function (err: any, data: any) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log('Nuevo Bucket', data); // successful response
      /*
      data = {
       Location: "http://examplebucket.<Region>.s3.amazonaws.com/"
      }
      */
    });
  }
}
