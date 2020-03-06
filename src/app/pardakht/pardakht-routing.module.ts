import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoLayoutComponent } from './../_layout/no-layout/no-layout.component';

const routes: Routes = [
  {
    path: '', component: NoLayoutComponent, children: [
      { path: 'receipt', loadChildren: () => import('./old-receipt/old-receipt.module').then(o => o.OldReceiptModule) }
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