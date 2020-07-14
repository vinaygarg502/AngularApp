import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { TimerCounterComponent } from './timer-counter/timer-counter.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { TimerLogComponent } from './timer-log/timer-log.component';
import { CountTimerComponent } from './count-timer.component';
import { CountTimerRouting } from './count-timer-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations:[
        TimerComponent,
        TimerCounterComponent,
        TimerInputComponent,
        TimerLogComponent,
        CountTimerComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        SharedModule,
        CountTimerRouting
    ],
    providers:[]
})

export class CountTimerModule {

}