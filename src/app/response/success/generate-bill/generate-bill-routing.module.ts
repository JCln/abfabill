import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerateBillComponent } from './generate-bill.component';



const routes: Routes = [
  { path: '', component: GenerateBillComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateBillRoutingModule { }
