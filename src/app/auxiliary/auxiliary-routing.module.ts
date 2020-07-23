import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpComponent } from './help/help.component';


const routes: Routes = [
  { path: '', redirectTo: 'help', pathMatch: 'full' },
  { path: 'help', component: HelpComponent, outlet: 'modal' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuxRoutingModule { }
