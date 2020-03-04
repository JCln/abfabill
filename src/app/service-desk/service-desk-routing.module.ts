import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstallmentComponent } from './installment/installment.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'installment', component: InstallmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDeskRoutingModule { }
