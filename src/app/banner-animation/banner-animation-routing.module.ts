import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerAnimationComponent } from './banner-animation.component';

const routes: Routes = [
    { path: '', component:BannerAnimationComponent }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class BannerAnimationRouting {

}