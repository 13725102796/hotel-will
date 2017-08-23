import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { DetailComponent } from './detail/detail.component'
const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent
  },{
    path: 'order/detail',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
