import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstimateComponent } from './estimate/estimate.component';
import { BuyOrderComponent } from './buy-order/buy-order.component';
import { HotelComponent } from './hotel/hotel.component';
import { OrderComponent } from './order/order.component';
// import { DetailComponent } from './buy-order/detail/detail.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/hotel',
    pathMatch: 'full'
  },{
    path: 'hotel',
    component: HotelComponent
  },{
    path: 'estimate',
    component: EstimateComponent
  },{
    path: 'order',
    component: OrderComponent
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }