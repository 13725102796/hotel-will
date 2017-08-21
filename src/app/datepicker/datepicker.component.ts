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
  public usewho: boolean = false;
  public todayInit: Date = new Date();
  public tomorrowInit = new Date().setTime(new Date().getTime()+24*60*60*1000);
  ngOnInit() {
      this.usewho = false;
      if(this.tomTime || this.tomTime == 1){
        this.usewho = true;
      }
  }
  todayTime() {
    var Time = {}
    if (this.tomTime || this.tomTime == 1) {
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
      var tomorrow = (this.dt.getDate() + 1).toString();
      var time = month + "月" + day + "日";
      var tomorrowTime = month + "月" + tomorrow + "日";
      Time = {
        time: time,
        tomorrow: tomorrowTime
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
