import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'bill', loadChildren: () => import('./pardakht/pardakht.module').then(p => p.PardakhtModule) },
  { path: 'installment', loadChildren: () => import('./installment/installment.module').then(i => i.InstallmentModule) },
  { path: 'elcs', loadChildren: () => import('./elc-services/elc-services.module').then(elc => elc.ElcServicesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDeskRoutingModule { }
