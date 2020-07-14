import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CountTimerComponent implements OnInit {
  count: number;
  startCounter: number;
  pauseCounter: number;
  activityArray: Array<object>;
  constructor(){

  }

  ngOnInit(){

  }
  onGameStart(eventData: {count: number}){
    this.count = eventData.count;
  }

  onCounterLog(eventData: {startCounter: number, pauseCounter: number}){
    this.startCounter = eventData.startCounter;;
    this.pauseCounter = eventData.pauseCounter;
  }

  onActivityLog(eventData:{activityLogArray: Array<object>}){
    this.activityArray = eventData.activityLogArray;
  }
}
