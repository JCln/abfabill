import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../_layout/layout/layout.component';
import { OldReceiptComponent } from './view-bill/old-receipt/old-receipt.component';
import { ViewBillComponent } from './view-bill/view-bill.component';

const routes: Routes = [
  { path: 'oldreceipt', component: OldReceiptComponent },
  {
    path: '', component: LayoutComponent, children: [
      { path: ':id', component: ViewBillComponent }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }