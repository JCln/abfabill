import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AndroidComponent } from './android.component';


const routes: Routes = [
  { path: '', component: AndroidComponent },
  { path: 'learn', loadChildren: () => import('./learn/learn.module').then(ln => ln.LearnModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AndroidRoutingModule { }
