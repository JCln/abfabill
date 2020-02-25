import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonyLayoutComponent } from './_layout/anony-layout/anony-layout.component';
import { LayoutComponent } from './_layout/layout/layout.component';
import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewBillComponent } from './pardakht/view-bill/view-bill.component';

const routes: Routes = [
  {
    path: '', component: AnonyLayoutComponent, children: [
      { path: '', redirectTo: 'pageNotFound', pathMatch: 'full' }
      // { path: 'pageNotFound', component: PageNotFoundComponent }
    ]
  },
  {
    path: '', component: LayoutComponent, children: [
      { path: ':id', component: ViewBillComponent }
    ]
  },
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


  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
