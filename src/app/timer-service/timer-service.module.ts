import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CounterActivityComponent } from './counter-activity/counter-activity.component';
import { CounterFormComponent } from './counter-form/counter-form.component';
import { CounterLogComponent } from './counter-log/counter-log.component';
import { CounterViewComponent } from './counter-view/counter-view.component';
import { TimerServiceComponent } from './timer-service.component';
import { TimerServiceRouting } from './timer-service-routing.module';



@NgModule({
    declarations:[
        CounterActivityComponent,
        CounterFormComponent,
        CounterLogComponent,
        CounterViewComponent,
        TimerServiceComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        SharedModule,
        TimerServiceRouting
    ],
    providers:[]
})

export class TimerServiceModule {

}