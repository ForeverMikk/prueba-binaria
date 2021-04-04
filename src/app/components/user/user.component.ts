import { Component, OnInit } from '@angular/core';

import axios from 'axios';

import { UploadService } from './../../services/upload.service';

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

  userData: any;

  selectedFiles: any;

  constructor(private uploadService: UploadService) {
    this.getData();
  }

  ngOnInit(): void {}

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

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);

    console.log('Archivo: ', file);
    console.log('Servicio: ', this.uploadService.uploadFile(file));
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    console.log('Selected files', this.selectedFiles);
  }
}
