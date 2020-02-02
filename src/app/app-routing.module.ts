import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';
import { OldReceiptComponent } from './pardakht/view-bill/old-receipt/old-receipt.component';
import { FailedComponent } from './response/failed/failed.component';
import { SuccessComponent } from './response/success/success.component';

const routes: Routes = [
  {
    path: '', component: NoLayoutComponent, children: [
      { path: 'success', component: SuccessComponent },
      { path: 'failed', component: FailedComponent },
      // { path: 'oldreceipt', component: OldReceiptComponent }
    ],
  },
  // { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
  // { path: 'pageNotFound', component: PageNotFoundComponent },
  // {
  //   path: '', component: LayoutComponent, children: [
  // { path: '', component: PageNotFoundComponent },
  // { path: ':id', component: ViewBillComponent },
  // { path: 'pageNotFound', component: PageNotFoundComponent }
  //   ]
  // },

  // {
  // path: '', component: NoLayoutComponent, children: [
  //   path: 'success', component: SuccessComponent, pathMatch: 'full'
  // },
  //  {path: 'failed', component: FailedComponent },
  { path: 'oldreceipt', component: OldReceiptComponent },
  // ],
  // },
  // { path: '', component: NoLayoutComponent, children: [{ path: 'oldreceipt', component: OldReceiptComponent }] },
  { path: '**', redirectTo: 'pageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
