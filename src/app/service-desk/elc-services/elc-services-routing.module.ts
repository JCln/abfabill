import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElcServicesComponent } from './elc-services.component';

const routes: Routes = [
  { path: '', component: ElcServicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElcServicesRoutingModule { }
