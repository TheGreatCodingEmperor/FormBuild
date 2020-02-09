import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-group',
  template:`
  <div [ngClass]="field.fieldGroupClassName">
  <app-my-formly-form [fields]="field.fieldGroup" [model]="field.model" [form]="form" [options]="field.options"></app-my-formly-form>
  </div>
  `,
  styleUrls: ['./group.component.css']
})
export class GroupComponent extends FieldType implements OnInit{
  ngOnInit(){
    console.log('form')
    console.log(this.form);
  }
}
// [ngClass]="field.fieldGroupClassName"
