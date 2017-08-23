import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BuyOrderComponent } from './buy-order/buy-order.component';
import { EstimateComponent } from './estimate/estimate.component';


// 路由
import { AppRoutingModule } from './app-routing.module';
import { BuyOrderModule } from './buy-order/buy-order.module';
import { OrderModule } from './order/order.module';
import { HotelComponent } from './hotel/hotel.component';

//ngx-boostrap
import { DatepickerModule } from 'ngx-bootstrap';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DetailComponent } from './hotel/detail/detail.component';
// import { OrderComponent } from './order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    BuyOrderComponent,
    EstimateComponent,
    HotelComponent,
    DatepickerComponent,
    DetailComponent
    // OrderComponent

  ],
  imports: [
    BuyOrderModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DatepickerModule.forRoot(),
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
