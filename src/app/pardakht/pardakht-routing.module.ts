import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../_layout/layout/layout.component';
import { NoLayoutComponent } from '../_layout/no-layout/no-layout.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { OldReceiptComponent } from './view-bill/old-receipt/old-receipt.component';
import { ViewBillComponent } from './view-bill/view-bill.component';

const routes: Routes = [
  { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'pageNotFound', component: PageNotFoundComponent },
      { path: ':id', component: ViewBillComponent }
    ]
  },
  {
    path: '', component: NoLayoutComponent, children: [
      // { path: 'success', component: SuccessComponent },
      // { path: 'failed', component: FailedComponent },
      { path: 'oldreceipt', component: OldReceiptComponent }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }
