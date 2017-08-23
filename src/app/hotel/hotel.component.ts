import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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
  public showPage: string = "ht-predit";
  @ViewChild('dateBoxLeft') dateBoxLeft: ElementRef;
  @ViewChild('dateBoxRight') dateBoxRight: ElementRef;
  handleShowPage(e){
    var obj = e.target.id 
    this.showPage = obj.toString();
  }


  // 修改当前日期
  @Input() tomTime;
  private data:any = {
    id: '',
    usewho: new Date()
  };

  public todayTime: string = "0" + (new Date().getMonth()+1).toString() + "月" +  new Date().getDate().toString() + "日" + " 今日";
  public tomorrow: string = "0" + (new Date().getMonth()+1).toString() + "月" +  (new Date().getDate() + 1).toString() + "日";;
  onVoted(e) {
    this.closeAllPanel();
    if(this.data.id == 1){ 
      this.tomorrow = e.tomorrow; 
    }else{
      this.todayTime = e.time; 
      this.tomorrow = e.tomorrow; 
      this.data.usewho = e.usewho;
    }
  }

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
  showDate(type){
    this.data.id = type;
    console.log(this.data)
    this.showOverlayPanel()
    this.handleDate = true;
  }

  //预定跳转
  hrefPredit(){
    
  }

  constructor() { 
    
   }

  ngOnInit() {
  }

}
