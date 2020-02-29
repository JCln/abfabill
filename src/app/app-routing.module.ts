import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';

const routes: Routes = [
  // {
  //   path: '', component: AnonyLayoutComponent, children: [
  //     { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
  //     { path: 'pageNotFound', component: PageNotFoundComponent }
  //   ]
  // },
  // {
  //   path: '', component: LayoutComponent, children: [
  //     { path: ':id', component: ViewBillComponent }
      // { path: 'services', loadChildren: () => import('./service-desk/service-desk.module').then(s => s.ServiceDeskModule) }
  //   ]
  // },
  {
    path: '', component: NoLayoutComponent, children: [
      {
        path: 'success', loadChildren: () => import('./response/response.module').then(r => r.ResponseModule)
      },
      {
        path: 'failed', loadChildren: () => import('./response/response.module').then(r => r.ResponseModule)
      },
    ]
  },

  // { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
