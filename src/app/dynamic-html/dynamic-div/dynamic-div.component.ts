import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {
  @Input() message:number;
  constructor() { }

  ngOnInit(): void {
  }
  onAlert(message){
    alert(message);
  }
}
