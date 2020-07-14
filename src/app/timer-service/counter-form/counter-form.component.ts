import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  styleUrls: ['./counter-form.component.scss']
})
export class CounterFormComponent implements OnInit, OnDestroy {
  counterInput: number;
  counterSubs2: Subscription;
  flagSubs: Subscription;
  count:number;
  flag:boolean= false;
  activityArray=[];
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterSubs2 = this.counterService.activityEvent.subscribe((activityArray)=>{
      this.activityArray = activityArray;
    })
    this.flagSubs = this.counterService.flagEvent.subscribe((flag)=>{
      this.flag=false;
    })
  }

  setInput(){
    this.counterService.setTime(this.counterInput);
  }
  onStart(flag){
    if(flag){
      this.counterService.counterInterval(this.counterInput);
    }
    else{
      this.counterService.pauseGame();
    }
    this.flag=flag;
  }

  ngOnDestroy(){
    this.counterSubs2.unsubscribe();
    this.flagSubs.unsubscribe();
  }
  onReset(){
    this.flag=false;
    this.counterService.resetGame(this.counterInput);
  }
}
