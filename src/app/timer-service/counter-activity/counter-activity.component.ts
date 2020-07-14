import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-activity',
  templateUrl: './counter-activity.component.html',
  styleUrls: ['./counter-activity.component.scss']
})
export class CounterActivityComponent implements OnInit {
  activityArray=[];
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.activityEvent.subscribe((activityArray)=>{
      this.activityArray = activityArray;
    })
  }

}
