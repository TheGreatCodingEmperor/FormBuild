import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-group',
  template:`
  <div [ngClass]="field.filedGroupClassName">
  <app-my-formly-form [fields]="field.fieldGroup" [model]="field.model" [form]="filed.form"></app-my-formly-form>
  </div>
  `,
  styleUrls: ['./group.component.css']
})
export class GroupComponent extends FieldType {
}
