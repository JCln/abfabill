import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KardexComponent } from './kardex.component';


const routes: Routes = [
  { path: '', component: KardexComponent },
  { path: 'bubble', loadChildren: () => import('./chart/bar/bubble/bubble.module').then(bubble => bubble.BubbleModule) },
  { path: 'bar', loadChildren: () => import('./chart/bar/bar.module').then(bar => bar.BarModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KardexRoutingModule { }
