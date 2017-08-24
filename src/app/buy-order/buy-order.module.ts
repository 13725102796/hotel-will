import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { BuyOrderRouting } from './buy-order.routing';
import { Routes, RouterModule } from '@angular/router';
import { BuyOrderComponent } from './buy-order.component';

@NgModule({
  imports: [
    CommonModule,
    BuyOrderRouting
  ],
  declarations: [
    DetailComponent,
    BuyOrderComponent
  ]
})
export class BuyOrderModule { 

}