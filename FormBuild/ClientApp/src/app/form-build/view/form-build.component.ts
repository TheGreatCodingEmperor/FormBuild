import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-form-build',
  templateUrl: './form-build.component.html',
  styleUrls: ['./form-build.component.scss']
})
export class FormBuildComponent implements OnInit {

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[];

  constructor() { }

  ngOnInit() {
    this.fields = [
      {
        fieldGroupClassName:'block1 block2',
        fieldGroup: [
          {
            type: 'input',
            key: 'street',
            className:'test',
            templateOptions: {
              label: 'Street',
              // attributes: {
                style: "color:white; background-color:black;",
              // }
            },
          },
          {
            type: 'select',
            key: 'street2',
            className: 'test2',
            templateOptions: {
              label: 'Street2',
              attributes: {
                // style: "color:white; background-color:black; width:70vw",
              }
            },
          }]
      }
    ];
  }

}
