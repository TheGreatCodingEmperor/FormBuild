import { NgModule } from '@angular/core';

import { FormBuildRoutingModule } from './form-build-routing.module';
import { FormBuildComponent } from './view/form-build.component';

import { MyFormlyFormComponent } from './component/my-formly-form/my-formly-form.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { DesignFormComponent } from './component/design-form/design-form.component';
import { GroupComponent } from './view/formly-type/group/group.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [FormBuildComponent, MyFormlyFormComponent, DesignFormComponent, GroupComponent],
  imports: [
    SharedModule,
    FormBuildRoutingModule,
    FormlyModule.forRoot({
      types:[
        { name: 'group', component: GroupComponent}
      ]
    })
  ]
})
export class FormBuildModule { }
