import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewBillComponent } from './view-bill/view-bill.component';

const routes: Routes = [
  // { path: '', redirectTo: 'pardakht', pathMatch: 'full' },
  {
    path: ':id', component: ViewBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }
