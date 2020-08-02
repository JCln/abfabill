import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 's', loadChildren: () => import('./success/success.module').then(s => s.SuccessModule) },
  { path: 'f', loadChildren: () => import('./failed/failed.module').then(s => s.FailedModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponseRoutingModule { }
