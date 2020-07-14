import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicHtmlComponent } from './dynamic-html.component';

const routes: Routes = [
    { path: '', component:DynamicHtmlComponent }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DynamicHtmlRouting {
}