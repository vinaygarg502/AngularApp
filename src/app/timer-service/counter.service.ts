import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class CounterService {
    count: number;
    interval;
    startCounter: number=0;
    pauseCounter: number =0;
    activityArray=[]; 
    counterEvent = new Subject<number>();
    startEvent = new Subject<number>();
    pauseEvent = new Subject<number>();
    activityEvent = new Subject<Array<{eventName: string, date: Date, count: number}>>();
    flagEvent = new Subject<boolean>()

    counterInterval(counter){
        this.startCounter++;
        this.activityArray.push({eventName: 'started',date: new Date(), count: this.count});
        this.activityEvent.next(this.activityArray);
        this.activityEvent
        this.startEvent.next(this.startCounter);
        this.count=this.count || counter;
        this.interval = setInterval(()=>{
            if(this.count===0){
                this.resetGame(counter);
                return false;
            }
            this.count--;
            this.counterEvent.next(this.count);
            
        }, 1000)
    }

    pauseGame(){
        this.pauseCounter++;
        this.activityArray.push({eventName: 'paused',date: new Date(), count: this.count});
        this.activityEvent.next(this.activityArray);
        this.pauseEvent.next(this.pauseCounter);
        clearInterval(this.interval);
    }
    resetGame(inputvalue){
        clearInterval(this.interval);
        this.flagEvent.next(false);
        this.count = inputvalue;
        this.startCounter=0;
        this.pauseCounter=0;
        this.activityArray=[];
        this.activityEvent.next(this.activityArray);
        this.counterEvent.next(this.count);
        this.pauseEvent.next(this.pauseCounter);
        this.startEvent.next(this.startCounter);
    }
    setTime(count){
        this.count = count;
        this.counterEvent.next(this.count);
    }
}