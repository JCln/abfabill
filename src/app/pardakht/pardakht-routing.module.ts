import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewBillComponent } from './view-bill/view-bill.component';
import { ViewbillIdComponent } from './view-bill/viewbill-id/viewbill-id.component';

const routes: Routes = [
  // { path: '', redirectTo: 'pardakht', pathMatch: 'full' },
  {
    path: 'pardakht/:id', component: ViewBillComponent
  },
    
    // , children: [
    //   { path: ':id', component: ViewBillComponent }
    // ]

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }
