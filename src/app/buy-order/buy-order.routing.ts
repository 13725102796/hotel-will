import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { BuyOrderComponent } from './buy-order.component';

const routes: Routes = [
  {
    path: 'buyorder',
    component: BuyOrderComponent,
    children: [
      {
        path: 'detail',
        component: DetailComponent,
        children: [
          {
            path: 'detail',
            component: DetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyOrderRouting { }