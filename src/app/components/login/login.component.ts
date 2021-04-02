import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import axios from 'axios';
// import { Client } from 'minio';
// import * as Minio from 'minio';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  private url = 'http://ec2-54-187-122-255.us-west-2.compute.amazonaws.com/';
  loginUrl = this.url + 'api/login2';

  userData: any;
  userToken = '';

  file = './../../assets/niclas-illg-wzVQp_NRIHg-unsplash.jpg';

  // s3Client = new Minio.Client({
  //   endPoint: '',
  //   accessKey: '',
  //   secretKey: '',
  // });

  // console.log(this.client);
  constructor(private router: Router) {
    // try {
    //   const client = new Client({
    //     endPoint: 's3.binahriaanalytics.ninja',
    //     accessKey: 'S3_Binahria_T',
    //     secretKey: 'uVgsuanjRDhvyjIoNnwf',
    //   });
    //   console.log(client);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  ngOnInit(): void {
    // console.log(client);
  }

  async onSubmit() {
    event?.preventDefault();
    // console.log(this.loginForm);

    try {
      const { data } = await axios.post(this.loginUrl, this.loginForm.value);
      console.log('Datos de Sesión: ', data);

      this.userToken = data.access_token;
      const id = data.data.id;

      localStorage.setItem('userToken', this.userToken);
      localStorage.setItem('userID', id);

      this.router.navigate(['user']);

      console.log('ID: ', localStorage.getItem('userID'));
    } catch (error) {
      console.log(error);
    }
  }

  // listFile() {
  //   this.client.listBuckets(function (err, buckets) {
  //     if (err) return console.log(err);

  //     console.log('buckets: ', buckets);
  //   });
  // }

  // uploadFile() {
  //   this.client.makeBucket('newbucket', 'us-east-1', function (err) {
  //     if (err) return console.log('Error creating bucket.', err);

  //     console.log('Bucket created successfully in "us-east-1".');
  //   });
  // }
}
