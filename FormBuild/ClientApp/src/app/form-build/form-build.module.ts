import { NgModule } from '@angular/core';

import { FormBuildRoutingModule } from './form-build-routing.module';
import { FormBuildComponent } from './view/form-build.component';

import { MyFormlyFormComponent } from './component/my-formly-form/my-formly-form.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FormBuildComponent, MyFormlyFormComponent],
  imports: [
    SharedModule,
    FormBuildRoutingModule
  ]
})
export class FormBuildModule { }
