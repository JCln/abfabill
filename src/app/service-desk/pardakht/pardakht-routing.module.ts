import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewBillComponent } from './view-bill/view-bill.component';

const routes: Routes = [
  { path: '', component: ViewBillComponent },
  { path: 'receipt', loadChildren: () => import('./old-receipt/old-receipt.module').then(o => o.OldReceiptModule) }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }