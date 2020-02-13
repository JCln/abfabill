import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OldReceiptComponent } from './view-bill/old-receipt/old-receipt.component';

const routes: Routes = [
  { path: 'oldreceipt', component: OldReceiptComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }