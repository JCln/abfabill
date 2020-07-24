import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../_layout/layout/layout.component';
import { AnonyLayoutComponent } from './../_layout/anony-layout/anony-layout.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '', component: AnonyLayoutComponent, children: [
      { path: '', component: ServicesComponent },
      { path: 'installment', loadChildren: () => import('./installment/installment.module').then(i => i.InstallmentModule), data: { animation: 'ServiceDesk' } },
      { path: 'ma', loadChildren: () => import('./metter-announce/metter-announce.module').then(ma => ma.MetterAnnounceModule), data: { animation: 'ServiceDesk' } },
      { path: 'kardex', loadChildren: () => import('./kardex/kardex.module').then(kx => kx.KardexModule), data: { animation: 'ServiceDesk' } },
      { path: 'elcs', loadChildren: () => import('./elc-services/elc-services.module').then(elc => elc.ElcServicesModule), data: { animation: 'ServiceDesk' } },
      { path: 'myInfo', loadChildren: () => import('./member-info/member-info.module').then(mi => mi.MemberInfoModule), data: { animation: 'ServiceDesk' } },
      { path: 'um', loadChildren: () => import('./update-mobile/update-mobile.module').then(um => um.UpdateMobileModule), data: { animation: 'ServiceDesk' } }
    ]
  },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'bill', loadChildren: () => import('./pardakht/pardakht.module').then(p => p.PardakhtModule), data: { animation: 'FilterPage' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDeskRoutingModule { }
