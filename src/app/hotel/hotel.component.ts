import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DatepickerComponent } from './../datepicker/datepicker.component';
import { fadeIn, handleMask } from './../animate/fadeIn';
import { HotelService } from './hotel.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  handleShowPage(e) {
    var obj = e.target.id
    this.showPage = obj.toString();
  }


  // 修改当前日期
  @Input() tomTime;
  private data: any = {
    id: '',
    usewho: new Date()
  };

  public todayTime: string = "0" + (new Date().getMonth() + 1).toString() + "月" + new Date().getDate().toString() + "日" + " 今日";
  public tomorrow: string = "0" + (new Date().getMonth() + 1).toString() + "月" + (new Date().getDate() + 1).toString() + "日";;
  onVoted(e) {
    this.closeAllPanel();
    if (this.data.id == 1) {
      this.tomorrow = e.tomorrow;
    } else {
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
  showDate(type) {
    this.data.id = type;
    console.log(this.data)
    this.showOverlayPanel()
    this.handleDate = true;
  }

  public roomType: any = {
    error: 0,
    data: [
      {
        id: "1",
        name: "标准大床房",
        desc: "不含早 有窗",
        price: "219",
        timeIn: "",
        timeOut:"",
        nowRoomNum: [ "1" ]
      }, {
        id: "2",
        name: "商务时尚大床房",
        desc: "含早",
        price: "269",
        timeIn: "",
        timeOut:"",
        nowRoomNum: ["1", "2"]
      }, {
        id: "3",
        name: "时尚特价房",
        desc: "不含早",
        price: "169",
        timeIn: "",
        timeOut:"",
        nowRoomNum: ["1", "2","3","4"]
      }
    ]
  }
  //储存指定输出数据

  //预定跳转
  hrefPredit(roomId) {
    for (let i = 0; i < this.roomType.data.length; i++) {
      if (this.roomType.data[i].id == roomId) {
        this.roomType.data[i].timeIn = this.todayTime;
        this.roomType.data[i].timeOut = this.tomorrow;
        this.hotelService.data = this.roomType.data[i];
      }
    }
    this.router.navigate(['./../buyorder']);
  }

  constructor(
     private hotelService: HotelService,
     private router: Router,
     private route: ActivatedRoute
     
  ) {

  }

  ngOnInit() {
  }

}
