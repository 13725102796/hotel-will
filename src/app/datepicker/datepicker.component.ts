import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {
  @Input() tomTime: any;
  @Output() onVoted = new EventEmitter();
  // vote(agreed: boolean) {
  //   this.onVoted.emit(agreed);
  //   this.voted = true;
  // }
  public usewho: Date = new Date();
  public todayInit: Date = new Date();
  ngOnInit() {
    if (this.tomTime && this.tomTime.id == 1) {
      this.usewho = this.tomTime.usewho;
      console.log(this.usewho)
    }
  }
  todayTime() {
    var Time = {}
    console.log(this.tomTime.id)
    if (this.tomTime && this.tomTime.id == 1) {
      var month = (this.dt.getMonth() + 1).toString();
      month = "0" + month;
      var tomorrow = (this.dt.getDate()).toString();
      var tomorrowTime = month + "月" + tomorrow + "日";
      Time = {
        tomorrow: tomorrowTime
      }
      this.onVoted.emit(Time);
    } else {
      var month = (this.dt.getMonth() + 1).toString();
      month = "0" + month;
      var day = (this.dt.getDate()).toString();
      var time = month + "月" + day + "日";
      // 获取当前月的最后一天
      var date = new Date(this.dt);
      var currentMonth = date.getMonth();
      var nextMonth = ++currentMonth;
      var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
      var oneDay = 1000 * 60 * 60 * 24;
      var monthLastDay = new Date(nextMonthFirstDay.getTime() - oneDay);
      console.log(monthLastDay)
      var tomorrowTime ='';
      if (day == monthLastDay.getDate().toString()) {
        tomorrowTime = nextMonth + "月" + "1日"
      } else {
        var tomorrow = (this.dt.getDate() + 1).toString();
        tomorrowTime = month + "月" + tomorrow + "日";
      }
      //获取对应时间撮，然后 + 一天时间
      var usewho = new Date(this.dt.getTime() + 1000 * 60 * 60 * 24)
      usewho = new Date(usewho)

      Time = {
        time: time,
        tomorrow: tomorrowTime,
        usewho: usewho
      }
      this.onVoted.emit(Time);
    }

  }



  public dt: Date = new Date();
  public minDate: Date = void 0;
  public events: any[];
  public tomorrow: Date;
  public afterTomorrow: Date;
  public dateDisabled: { date: Date, mode: string }[];
  public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
    'shortDate'];
  public format: string = this.formats[0];
  public dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened: boolean = false;

  public constructor() {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    (this.dateDisabled = []);
    this.events = [
      { date: this.tomorrow, status: 'full' },
      { date: this.afterTomorrow, status: 'partially' }
    ];
    moment.locale('zh-cn');
  }

  public getDate(): number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  public today(): void {
    this.dt = new Date();
  }

  public d20090824(): void {
    this.dt = moment('2009-08-24', 'YYYY-MM-DD')
      .toDate();
  }

  public disableTomorrow(): void {
    this.dateDisabled = [{ date: this.tomorrow, mode: 'day' }];
  }

  // todo: implement custom class cases
  public getDayClass(date: any, mode: string): string {
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (let event of this.events) {
        let currentDay = new Date(event.date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return event.status;
        }
      }
    }

    return '';
  }

  public disabled(date: Date, mode: string): boolean {
    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
  }

  public open(): void {
    this.opened = !this.opened;
  }

  public clear(): void {
    this.dt = void 0;
    this.dateDisabled = undefined;
  }

  public toggleMin(): void {
    this.dt = new Date(this.minDate.valueOf());
  }



}
