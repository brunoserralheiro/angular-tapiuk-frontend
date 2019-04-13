
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3030/api/products?access_token=rBWNsHwAkmwPrbwRiwJnOEQDWKJxGRxlCZHcxcMbDUIc7sv5L99kqdr56dBuAX0q';

  products: Product[] = [];


  getProduct(): Observable<Product[]> {
    console.log('getProduct');
    return this.http.get<Product[]>(this.url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });


  }
  updateProduct(p: Product): Observable<void> {

    this.products.forEach((element, index) => {
      if (element.id === p.id) {
        this.products[index] = p;
      }
    });
    console.log('updateProduct', p);
    return this.http.put<void>(`${this.url}`, p, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
