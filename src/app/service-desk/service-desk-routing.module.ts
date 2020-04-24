import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../_layout/layout/layout.component';
import { AnonyLayoutComponent } from './../_layout/anony-layout/anony-layout.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '', component: AnonyLayoutComponent, children: [
      { path: '', component: ServicesComponent },
      { path: 'installment', loadChildren: () => import('./installment/installment.module').then(i => i.InstallmentModule) },
      { path: 'ma', loadChildren: () => import('./metter-announce/metter-announce.module').then(ma => ma.MetterAnnounceModule) },
      { path: 'kardex', loadChildren: () => import('./kardex/kardex.module').then(kx => kx.KardexModule) },
      { path: 'elcs', loadChildren: () => import('./elc-services/elc-services.module').then(elc => elc.ElcServicesModule) },
      { path: 'cs', loadChildren: () => import('./cand-s/cand-s.module').then(cs => cs.CAndSModule) }
    ]
  },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'bill', loadChildren: () => import('./pardakht/pardakht.module').then(p => p.PardakhtModule) },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDeskRoutingModule { }
