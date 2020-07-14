import { Component, OnInit, ComponentFactoryResolver, ViewChild} from '@angular/core';
import { PlaceholderDirective } from './placeholder.directive';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';

@Component({
  selector: 'app-dynamic-html',
  templateUrl: './dynamic-html.component.html',
  styleUrls: ['./dynamic-html.component.scss']
})
export class DynamicHtmlComponent implements OnInit{

  @ViewChild(PlaceholderDirective,{static: true}) divHost: PlaceholderDirective;

  dataArr =[1,2,3,4,5,6,7,8];
  constructor(private componentFactoryResolver: ComponentFactoryResolver){
  }
  ngOnInit(){
    const divCompFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicDivComponent);
    const divViewContainerRef = this.divHost.viewContainerRef;

    for(let data of this.dataArr){
      let ref = divViewContainerRef.createComponent(divCompFactory);
      ref.instance.message=data;
    }
  }

}
