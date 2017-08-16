import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: ['./buy-order.component.css']
})
export class BuyOrderComponent implements OnInit {
  // @Input() dataNum;
  
  public arr = [1, 2, 3];

  showOverlay = false;
  showRoomNumSelector = false;
  showRoomTimeSelector = false;
  
  constructor() { }

  ngOnInit() {
  }

  showOverlayPanel() {
    this.showOverlay = true;
  }
  showRoomNumSelectorPanel() {
    this.showRoomNumSelector = true;
    this.showOverlayPanel()
  }
  showRoomTimeSelectorPanel() {
    this.showRoomTimeSelector = true;
    this.showOverlayPanel()
  }
  closeAllPanel() {
    this.showRoomNumSelector = false;
    this.showRoomTimeSelector = false;
    this.showOverlay = false;
  }

  // 展示房间数,入住时间
  public showNum:number =1;
  public showTime:number =1;
  public showTimeText: string = "18:00之前"
  selected(e) {
    var typeId = e.target.id
    if(typeId){ 
      if(typeId.indexOf("rm-item") > -1){
        this.showNum = Number(e.target.id.replace('rm-item',''));
        console.log(this.showNum)
      }
      if(typeId.indexOf("time-item") > -1){
        this.showTime = Number(e.target.id.replace('time-item',''));
        this.showTimeText = e.target.innerText;
      }      
    }
    this.closeAllPanel()
  }
  //保险栏
  public showInsur:Boolean = false;

  handleInsur (){
    this.showInsur = this.showInsur ? false : true;
  }
  //价格明细
  public showPriceDesc:Boolean = false;
  handlePriceDesc () {
    this.showPriceDesc = this.showPriceDesc ? false : true;
    this.showOverlay = this.showOverlay ? false : true;
  }

}

