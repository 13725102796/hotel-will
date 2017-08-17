import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BuyOrderComponent } from './buy-order/buy-order.component';
import { EstimateComponent } from './estimate/estimate.component';

// 路由
import { AppRoutingModule } from './app-routing.module';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyOrderComponent,
    EstimateComponent,
    HotelComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
