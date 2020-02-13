import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonyLayoutComponent } from './_layout/anony-layout/anony-layout.component';
import { LayoutComponent } from './_layout/layout/layout.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewBillComponent } from './pardakht/view-bill/view-bill.component';

const routes: Routes = [
  {
    path: '', component: AnonyLayoutComponent, children: [
      { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
      { path: 'pageNotFound', component: PageNotFoundComponent }
    ]
  },
  {
    path: '', component: LayoutComponent, children: [
      { path: ':id', component: ViewBillComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'success', loadChildren: () => import('./response/response.module').then(r => r.ResponseModule)
  },
  {
    path: 'failed', loadChildren: () => import('./response/response.module').then(r => r.ResponseModule)
  },
  // {
  //   path: '', component: NoLayoutComponent, canLoad: [AuthGuard], children: [
  //     { path: 'success', component: SuccessComponent },
  //     { path: 'failed', component: FailedComponent },
  //     { path: 'oldreceipt', component: OldReceiptComponent }
  //   ],
  // },
  { path: '**', redirectTo: 'pageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
