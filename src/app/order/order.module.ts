import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({

  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [
    OrderComponent,
    DetailComponent
  ]
})
export class OrderModule { }
