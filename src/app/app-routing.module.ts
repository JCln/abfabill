import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonyLayoutComponent } from './_layout/anony-layout/anony-layout.component';
import { LayoutComponent } from './_layout/layout/layout.component';
import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: AnonyLayoutComponent, children: [
      { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
      { path: 'pageNotFound', component: PageNotFoundComponent }
    ]
  },
  {
    path: '', component: LayoutComponent, children: [
      { path: ':id', canActivate: [AuthGuard], loadChildren: () => import('./service-desk/service-desk.module').then(s => s.ServiceDeskModule) }
    ]
  },
  {
    path: '', component: NoLayoutComponent, children: [
      {
        path: 'r', loadChildren: () => import('./response/response.module').then(r => r.ResponseModule)
      }
    ]
  },

  { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
