import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng.module';
import { MaterialModule } from './material.module';
import { MyFormlyModule } from './my-formly.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    PrimengModule,
    MaterialModule,
    MyFormlyModule
  ],
  exports:[
    BrowserModule,
    PrimengModule,
    MaterialModule,
    MyFormlyModule
  ]
})
export class SharedModule { }
