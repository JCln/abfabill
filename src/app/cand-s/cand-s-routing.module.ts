import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CAndSComponent } from './cand-s.component';


const routes: Routes = [{ path: '', component: CAndSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CAndSRoutingModule { }
