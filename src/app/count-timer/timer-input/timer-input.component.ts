import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.scss']
})
export class TimerInputComponent implements OnInit, OnDestroy {

  timerInput: number;
  count: number;
  startCounter : number =0;
  pauseCounter: number =0;
  activityLogArray: Object[]=[];
  startFlag: boolean = false;
  @Input() activityArray: Array<object>;
  @Output() intervalFired = new EventEmitter<{count: number}>();
  @Output() logCounter = new EventEmitter<{startCounter: number, pauseCounter: number}>();
  @Output() logFired = new EventEmitter<{activityLogArray: Array<object> }>();
  interval;
  constructor() { }

  ngOnInit(): void {
  }

  setTimerInput(){
    this.resetTimer();
  }
  startGame(startFlag){
    if(startFlag){
      this.activityLogArray.push({eventName:'started', date:new Date(), count: +this.count});
      this.startCounter++;
      this.interval =  setInterval(()=>{
        if(this.count===0){
          this.resetTimer();
          return false;
        }
        this.count--; 
        this.intervalFired.emit({count: this.count});
      }, 1000);
    }
    else{
      this.clearTimer();
      this.activityLogArray.push({eventName:'paused', date:new Date(), count: +this.count});
      this.pauseCounter++;
    }
    this.logCounter.emit({startCounter:this.startCounter, pauseCounter: this.pauseCounter});
    this.logFired.emit({activityLogArray: this.activityLogArray});
    this.startFlag= startFlag;
  }
  resetGame(){
   this.resetTimer();
  }
  private clearTimer(){
    if(this.interval){
      clearInterval(this.interval);
    }
  }

  private resetTimer(){
    this.clearTimer();
    this.count = this.timerInput;
    this.startCounter=0;
    this.pauseCounter=0;
    this.activityLogArray =[];
    this.startFlag=false;
    this.intervalFired.emit({count: this.count});
    this.logCounter.emit({startCounter:this.startCounter, pauseCounter: this.pauseCounter});
    this.logFired.emit({activityLogArray: this.activityLogArray});
  }
  ngOnDestroy(){
    this.clearTimer();
  }

}
