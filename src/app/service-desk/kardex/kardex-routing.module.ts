import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KardexComponent } from './kardex.component';


const routes: Routes = [
  { path: '', component: KardexComponent },
  { path: 'bar', loadChildren: () => import('./chart/bar/bar.module').then(bar => bar.BarModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KardexRoutingModule { }
