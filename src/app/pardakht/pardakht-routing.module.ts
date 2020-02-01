import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SuccessComponent } from '../response/success/success.component';
import { FailedComponent } from './../response/failed/failed.component';
import { ViewBillComponent } from './view-bill/view-bill.component';

const routes: Routes = [
  {
    path: 'id', component: ViewBillComponent,
  },
  { path: 'success', component: SuccessComponent },
  { path: 'failed', component: FailedComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }
