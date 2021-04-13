import { Component, NgModule, OnInit } from '@angular/core';

import axios from 'axios';
// import './../../../minio.js';
//@ts-ignore
// import { uploadFile } from '../../services/minio.service.ts';

// import { UploadService } from './../../services/upload.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  private url = 'http://ec2-54-187-122-255.us-west-2.compute.amazonaws.com/';

  private userToken = localStorage.getItem('userToken');
  private userID = localStorage.getItem('userID');

  logoutUrl = this.url + 'api/logout';
  profileUrl = this.url + 'api/users/';

  userData = {
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
  };

  selectedFiles: any;

  constructor() {
    this.getData();
  }

  ngOnInit(): void {
    // this.getData();
    // console.log(uploadFile());
  }

  async getData() {
    const { data } = await axios.get(this.profileUrl + this.userID, {
      headers: {
        Authorization: `Bearer ${this.userToken}`,
      },
    });

    this.userData = data.data[0];

    console.log(this.userData);
    console.log('Datos', this.userData.firstname);
    // console.log('Nombre ', this.userData.data[0].firstname);
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  // `upload` iterates through all files selected and invokes a helper function called `retrieveNewURL`.
  upload() {
    // Get selected files from the input element.
    var files = this.selectedFiles.item(0);
    console.log(files);
    // for (var i = 0; i < files.length; i++) {
    //   var file = files[i];

    // Retrieve a URL from our server.
    this.retrieveNewURL(files, (file: any, url: string) => {
      console.log(files);
      // Upload the file to the server.
      this.uploadFile(file, url);
    });
    // }
  }

  // `retrieveNewURL` accepts the name of the current file and invokes the `/presignedUrl` endpoint to
  // generate a pre-signed URL for use in uploading that file:
  async retrieveNewURL(file: any, cb: any) {
    console.log('init retriver');
    try {
      const {
        data: { url },
      } = await axios.get(`localhost:8080/presignedUrl?name=${file.name}`);
      if (url) {
        console.log({ url });
        cb(file, url);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // ``uploadFile` accepts the current filename and the pre-signed URL. It then uses `Fetch API`
  // to upload this file to S3 at `play.min.io:9000` using the URL:
  async uploadFile(file: any, url: string) {
    console.log('init upload File');

    try {
      const response = await axios.put(url, file);

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }
}
