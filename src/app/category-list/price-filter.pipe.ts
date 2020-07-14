import { Pipe, PipeTransform } from "@angular/core";
import { Product } from './product.model';

@Pipe({
    name:'price'
})
export class PriceFilter implements PipeTransform {
    transform(values:Product[], priceFilter){
        console.log(priceFilter);
        if(!priceFilter){
            return values;
        }
        if(priceFilter=='1'){
            return values.sort((a,b)=>{
                return a['price']-b['price'];
            })
        }
        return values.sort((a, b)=>{
            return b['price']-a['price'];
        })
        
    }
}