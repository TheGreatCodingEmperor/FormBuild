import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormlyFormComponent } from './my-formly-form.component';

describe('MyFormlyFormComponent', () => {
  let component: MyFormlyFormComponent;
  let fixture: ComponentFixture<MyFormlyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormlyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormlyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
