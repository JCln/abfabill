import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BubbleComponent } from './bubble.component';


const routes: Routes = [{ path: '', component: BubbleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BubbleRoutingModule { }
