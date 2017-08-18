import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BuyOrderComponent } from './buy-order/buy-order.component';
import { EstimateComponent } from './estimate/estimate.component';


// 路由
import { AppRoutingModule } from './app-routing.module';
import { HotelComponent } from './hotel/hotel.component';

//ngx-boostrap
import { DatepickerModule } from 'ngx-bootstrap';
import { DatepickerComponent } from './datepicker/datepicker.component';
@NgModule({
  declarations: [
    AppComponent,
    BuyOrderComponent,
    EstimateComponent,
    HotelComponent,
    DatepickerComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
