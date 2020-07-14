import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DynamicHtmlComponent } from './dynamic-html.component';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { PlaceholderDirective } from './placeholder.directive';
import { DynamicHtmlRouting } from './dynamic-html-routing.module';



@NgModule({
    declarations:[ 
        DynamicHtmlComponent,
        DynamicDivComponent,    
        PlaceholderDirective 
    ],
    imports:[
        CommonModule,
        DynamicHtmlRouting
    ],
    providers:[],
    entryComponents:[DynamicDivComponent]
})

export class DynamicHtmlModule {

}