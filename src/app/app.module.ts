import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { PruebaMinioComponent } from './components/prueba-minio/prueba-minio.component';
// import { UploadService } from './services/upload.service';

// import { Client } from 'minio'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    PruebaMinioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
