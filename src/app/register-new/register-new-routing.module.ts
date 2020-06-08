import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterNewComponent } from './register-new/register-new.component';


const routes: Routes = [
  { path: '', component: RegisterNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterNewRoutingModule { }
