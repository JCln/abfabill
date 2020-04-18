import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewBillLightComponent } from './view-bill-light.component';


const routes: Routes = [
  { path: '', component: ViewBillLightComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewBillLightRoutingModule { }
