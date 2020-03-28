import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FailedComponent } from './failed/failed.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', redirectTo: 'pg', pathMatch: 'full' },
  { path: 'success', component: SuccessComponent },
  { path: 'failed', component: FailedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponseRoutingModule { }
