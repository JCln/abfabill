import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewBillComponent } from '../pardakht/view-bill/view-bill.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'installment', loadChildren: () => import('./installment/installment.module').then(i => i.InstallmentModule) },
  { path: 'bill', component: ViewBillComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDeskRoutingModule { }
