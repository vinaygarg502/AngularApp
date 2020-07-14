import { Injectable } from "@angular/core";
import { Product } from './product.model';
import { Observable, of } from 'rxjs';
import { Products } from './mock-products';

@Injectable({providedIn:'root'})
export class ProductsService{
    getProducts(): Observable<Product[]>{
        return of(Products);
    }
}