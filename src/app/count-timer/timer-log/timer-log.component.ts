import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.scss']
})
export class TimerLogComponent implements OnInit {
  @Input() activityArray: Array<object>;
  constructor() { }

  ngOnInit(): void {
  }

}
