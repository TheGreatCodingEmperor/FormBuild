import { NgModule } from '@angular/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
          { name: 'required', message: 'This field is required' },
      ],
  })
  ],
  exports: [
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    FormlyModule,
  ]
})
export class MyFormlyModule { }
