import { Component, OnInit, NgZone, Attribute, Optional } from '@angular/core';
import { FormlyForm, FormlyFormBuilder, FormlyConfig } from '@ngx-formly/core';
import { FormGroupDirective } from '@angular/forms';
import { FormBuildService } from '../../service/form-build.service';

@Component({
  selector: 'app-my-formly-form',
  templateUrl: './my-formly-form.component.html',
  styleUrls: ['./my-formly-form.component.css']
})
export class MyFormlyFormComponent extends FormlyForm implements OnInit {

  constructor(
    private formService: FormBuildService,
    myFormlyBuilder: FormlyFormBuilder,

    formlyBuilder: FormlyFormBuilder,
    formlyConfig: FormlyConfig,
    ngZone: NgZone,
    @Attribute('immutable') immutable,
    @Optional() parentFormGroup: FormGroupDirective,
  ) {
    super(formlyBuilder,formlyConfig,ngZone,immutable,parentFormGroup);
   }

   ngOnInit(){
   }

   notifyDrop(item){
     console.log(item);
    this.formService.notifyDrop.next(item);
   }
}
