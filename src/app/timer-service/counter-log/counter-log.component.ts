import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-log',
  templateUrl: './counter-log.component.html',
  styleUrls: ['./counter-log.component.scss']
})
export class CounterLogComponent implements OnInit {
  pauseCount: number = 0;
  startCount: number = 0;
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.startEvent.subscribe(number=>{
      this.startCount = number;
    })
    this.counterService.pauseEvent.subscribe(number=>{
      this.pauseCount = number;
    })
  }

}
