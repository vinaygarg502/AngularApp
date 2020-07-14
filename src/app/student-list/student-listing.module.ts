import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';
import { KeysPipe } from './keys.pipe';
import { StudentListRouting } from './student-list-routing.module';



@NgModule({
    declarations:[
        StudentListComponent,
        KeysPipe
    ],
    imports:[
        FormsModule,
        CommonModule,
        StudentListRouting
    ],
    providers:[]
})

export class StudentListingModule {

}