import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    FilterPipe
  ],
  exports:[
      FilterPipe
  ]
})
export class SharedModule { }
