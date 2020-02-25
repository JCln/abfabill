import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonyLayoutComponent } from '../_layout/anony-layout/anony-layout.component';
import { LayoutComponent } from '../_layout/layout/layout.component';
import { NoLayoutComponent } from './../_layout/no-layout/no-layout.component';
import { AuthGuard } from './../auth.guard';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { ViewBillComponent } from './view-bill/view-bill.component';

const routes: Routes = [
  {
    path: '', component: AnonyLayoutComponent, children: [
      { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
      { path: 'pageNotFound', component: PageNotFoundComponent },
      { path: 'receipt', redirectTo: 'receipt', pathMatch: 'full' }
    ]
  },
  {
    path: '', component: LayoutComponent, children: [
      { path: ':id', component: ViewBillComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: '', component: NoLayoutComponent, children: [
      { path: 'receipt', loadChildren: () => import('./old-receipt/old-receipt.module').then(o => o.OldReceiptModule) }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }