import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.scss']
})
export class CounterViewComponent implements OnInit, OnDestroy {
  counterSubs: Subscription;
  count: number;
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterSubs = this.counterService.counterEvent.subscribe(number=>{
      console.log(number);
      this.count = number;
    })
  }

  ngOnDestroy(){
    this.counterSubs.unsubscribe();
  }

}
