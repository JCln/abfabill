import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackRequestComponent } from './track-request/track-request.component';


const routes: Routes = [
  { path: '', component: TrackRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackRequestRoutingModule { }
