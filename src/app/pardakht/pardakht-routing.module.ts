import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonyLayoutComponent } from './../_layout/anony-layout/anony-layout.component';
import { InstallmentComponent } from './installment/installment.component';
import { OldReceiptComponent } from './view-bill/old-receipt/old-receipt.component';

const routes: Routes = [
  { path: 'oldreceipt', component: OldReceiptComponent },
  {
    path: '', component: AnonyLayoutComponent, children: [
      { path: 'installment', component: InstallmentComponent },
    ]
  },

  // { path: 'installment', component: InstallmentComponent }
  // path: 'failed', loadChildren: () => import('./response/response.module').then(r => r.ResponseModule)
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }