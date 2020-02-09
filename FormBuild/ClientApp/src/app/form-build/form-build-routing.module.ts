import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuildComponent } from './view/form-build.component';
import { DesignFormComponent } from './component/design-form/design-form.component';

const routes: Routes = [
  { path:'formbuild', component: DesignFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuildRoutingModule { }
