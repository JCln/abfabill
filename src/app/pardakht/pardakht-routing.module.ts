import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FailedComponent } from './../response/failed/failed.component';
import { SuccessComponent } from './../response/success/success.component';
import { OldReceiptComponent } from './view-bill/old-receipt/old-receipt.component';

const routes: Routes = [
  { path: 'oldreceipt', component: OldReceiptComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'failed', component: FailedComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }