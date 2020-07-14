import { NgModule } from "@angular/core";
import { CategoryListComponent } from './category-list.component';
import { CategoryListRouting } from './category-list-routing.module';
import { FormsModule } from '@angular/forms';
import { PriceFilter } from './price-filter.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        CategoryListComponent,
        PriceFilter
    ],
    imports:[
        FormsModule,
        CommonModule,
        CategoryListRouting
    ],
    providers:[]
})

export class CategoryListModule {

}