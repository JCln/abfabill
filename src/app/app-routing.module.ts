import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonyLayoutComponent } from './_layout/anony-layout/anony-layout.component';
import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '', component: AnonyLayoutComponent, children: [
      { path: '', redirectTo: 'pg', pathMatch: 'full' },
      { path: 'pg', component: PageNotFoundComponent },
      { path: 'rn', loadChildren: () => import('./register-new/register-new.module').then(rn => rn.RegisterNewModule), data: { animation: 'FilterPage' } },
      { path: 'tr/:id', loadChildren: () => import('./track-request/track-request.module').then(tr => tr.TrackRequestModule) },
      { path: 'cs', loadChildren: () => import('./cand-s/cand-s.module').then(cs => cs.CAndSModule), data: { animation: 'ServiceDesk' } },
      { path: 'aboutUs', loadChildren: () => import('./about-us/about-us.module').then(abu => abu.AboutUsModule) }     
    ]
  },
  {
    path: '', component: NoLayoutComponent, children: [
      {
        path: 'r', loadChildren: () => import('./response/response.module').then(r => r.ResponseModule)
      },
      {
        path: 'android', loadChildren: () => import('./android/android.module').then(and => and.AndroidModule)
      }
    ]
  },
  { path: ':id', canActivate: [AuthGuard], loadChildren: () => import('./service-desk/service-desk.module').then(s => s.ServiceDeskModule), data: { animation: 'FilterPage' } },
  {
    path: 'aux', loadChildren: () => import('./auxiliary/auxiliary.module').then(a => a.AuxModule)
  },

  { path: '**', redirectTo: 'pg', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
