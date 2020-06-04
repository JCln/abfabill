import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpComponent } from './help/help.component';
import { InnerComponent } from './inner.component';


const routes: Routes = [
  { path: '', redirectTo: 'inner', pathMatch: 'full' },
  {
    path: 'inner', component: InnerComponent, children: [
      { path: 'help', component: HelpComponent, outlet: 'modal' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuxRoutingModule { }
