import { Component, OnInit, ViewChild } from '@angular/core';
import { FormlyFieldConfig, FormlyFormBuilder } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { MyFormlyFormComponent } from '../my-formly-form/my-formly-form.component';
import { FormBuildService } from '../../service/form-build.service';

@Component({
  selector: 'app-design-form',
  templateUrl: './design-form.component.html',
  styleUrls: ['./design-form.component.css']
})
export class DesignFormComponent implements OnInit {
  // @ViewChild('myFormly',{static:true})myFormly:MyFormlyFormComponent;

  fields: FormlyFieldConfig[] = [];
  model = {};
  form = new FormGroup({});
  options;

  groupOptions: FormlyFieldConfig[];

  constructor(
    private formService:FormBuildService,
    private formBuilder:FormlyFormBuilder
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.formService.notifyDrop.subscribe(
      res => {
        if(!res)return;
        this.drop(res);
      }
    );
  }
  initForm(){
    this.fields = [
      {
        type: 'input',
        key: '132',
        templateOptions: {
          label: '123'
        }
      },
      {
        type: 'input',
        key: '132',
        templateOptions: {
          label: '456'
        }
      }
    ];
    this.groupOptions = [
      {
        type: 'input',
        key: '132',
        templateOptions: {
          label: '123'
        }
      }
      ,
      {
        type: 'group',
        fieldGroupClassName: 'block1 block2',
        fieldGroup: [
          {
            type: 'input',
            key: 'street',
            className: 'test',
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
    ]
    this.formBuilder.buildForm(this.form, this.groupOptions, this.model, this.options);
  }
  drop(event: CdkDragDrop<FormlyFieldConfig[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
