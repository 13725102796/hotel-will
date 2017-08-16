import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuyOrderComponent } from './buy-order/buy-order.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyOrderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
