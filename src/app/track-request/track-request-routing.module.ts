import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmsListComponent } from './sms-list/sms-list.component';
import { TrackRequestComponent } from './track-request/track-request.component';


const routes: Routes = [
  // { path: '', component: TrackRequestComponent },
  // { path: 'sms', component: SmsListComponent }
  {
    path: '', component: TrackRequestComponent, children: [
      { path: 'sms', component: SmsListComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackRequestRoutingModule { }
