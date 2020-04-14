import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MetterAnnounceComponent } from './metter-announce.component';


const routes: Routes = [
  { path: '', component: MetterAnnounceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetterAnnounceRoutingModule { }
