import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstimateComponent } from './estimate/estimate.component';
import { BuyOrderComponent } from './buy-order/buy-order.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/buyorder',
    pathMatch: 'full'
  },{
    path: 'estimate',
    component: EstimateComponent
  },{
    path: 'buyorder',
    component: BuyOrderComponent
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }