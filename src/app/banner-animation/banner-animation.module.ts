import { NgModule } from "@angular/core";
import { BannerAnimationComponent } from './banner-animation.component';
import { CommonModule } from '@angular/common';
import { BannerAnimationRouting } from './banner-animation-routing.module';

@NgModule({
    declarations:[
        BannerAnimationComponent
    ],
    imports:[
        CommonModule,
        BannerAnimationRouting
    ]
})

export class BannerAnimationModule{

}