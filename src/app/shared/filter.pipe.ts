import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'filterdata',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(activityArray: any,eventName: string): any{
        if (!activityArray || !eventName) {
            return activityArray;
        }
        return activityArray.filter(activityItem=>{
            return activityItem.eventName===eventName;
        })
    }
}