import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonyLayoutComponent } from '../_layout/anony-layout/anony-layout.component';
import { LayoutComponent } from '../_layout/layout/layout.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuard } from './../auth.guard';
import { ViewBillComponent } from './view-bill/view-bill.component';

const routes: Routes = [
  {
    path: '', component: AnonyLayoutComponent, children: [
      { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
      { path: 'pageNotFound', component: PageNotFoundComponent }
    ]
  },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'services', loadChildren: () => import('../service-desk/service-desk.module').then(s => s.ServiceDeskModule) },
      {
        path: ':id', component: ViewBillComponent, canActivate: [AuthGuard], children: [
          // {path: 'receipt', redirectTo: 'receipt', pathMatch: 'full'}
          { path: 'receipt', loadChildren: () => import('./old-receipt/old-receipt.module').then(o => o.OldReceiptModule) }
        ]
      }
    ]
  },
  // {
  //   path: '', component: NoLayoutComponent, children: [
  //     { path: 'receipt', loadChildren: () => import('./old-receipt/old-receipt.module').then(o => o.OldReceiptModule) }
  //   ]
  // },
  // { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }