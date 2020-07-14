import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountTimerComponent } from './count-timer.component';

const routes: Routes = [
    { path: '', component:CountTimerComponent }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CountTimerRouting {
}