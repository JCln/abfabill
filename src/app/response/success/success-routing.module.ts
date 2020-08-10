import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'gb', loadChildren: () => import('./generate-bill/generate-bill.module').then(sgb => sgb.GenerateBillModule) },
  { path: 'pay/:cardNumber/:ref/:amount', loadChildren: () => import('./pay/pay.module').then(sp => sp.PayModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessRoutingModule { }
