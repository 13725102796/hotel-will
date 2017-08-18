import { Component, OnInit } from '@angular/core';
import { DatepickerComponent } from './../datepicker/datepicker.component';
import { fadeIn } from './../animate/fadeIn';
import { handleMask } from './../animate/handleMask';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  animations: [fadeIn, handleMask]
})
export class HotelComponent implements OnInit {
  showOverlay = false;

  showOverlayPanel() { 
    this.showOverlay = true;
  }
  closeAllPanel() {
    this.handleDate = false;
    this.showOverlay = false;
  }
  // 日期控件
  public handleDate: boolean = false;
  showDate(){
    this.showOverlayPanel()
    this.handleDate = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
