import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonyLayoutComponent } from './_layout/anony-layout/anony-layout.component';
import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: AnonyLayoutComponent, children: [
      { path: '', redirectTo: 'pg', pathMatch: 'full' },
      { path: 'pg', component: PageNotFoundComponent },
    ]
  },
  { path: ':id', loadChildren: () => import('./service-desk/service-desk.module').then(s => s.ServiceDeskModule), data: { animation: 'FilterPage' } },
  {
    path: '', component: NoLayoutComponent, children: [
      {
        path: 'r', loadChildren: () => import('./response/response.module').then(r => r.ResponseModule)
      }
    ]
  },

  { path: '**', redirectTo: 'pg', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
