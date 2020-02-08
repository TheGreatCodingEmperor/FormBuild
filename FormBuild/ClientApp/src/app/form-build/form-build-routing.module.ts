import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuildComponent } from './view/form-build.component';

const routes: Routes = [
  { path:'formbuild', component: FormBuildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuildRoutingModule { }
