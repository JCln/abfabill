import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './_layout/layout/layout.component';
import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OldReceiptComponent } from './pardakht/view-bill/old-receipt/old-receipt.component';
import { ViewBillComponent } from './pardakht/view-bill/view-bill.component';
import { FailedComponent } from './response/failed/failed.component';
import { SuccessComponent } from './response/success/success.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
      { path: 'pageNotFound', component: PageNotFoundComponent },
      { path: ':id', component: ViewBillComponent }
    ]
  },
  {
    path: '', component: NoLayoutComponent, children: [
      { path: 'success', component: SuccessComponent },
      { path: 'failed', component: FailedComponent },
      { path: 'oldreceipt', component: OldReceiptComponent }
    ],
  },
  { path: '**', redirectTo: 'pageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
