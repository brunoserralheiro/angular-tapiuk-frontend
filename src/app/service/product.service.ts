
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
  ) { }

  initProducts: Product[] = [
    {
      id: '1',
      name: 'tuna',
      price: '7.00',
      inStock: true
    },

    {
      id: '2',
      name: 'Chicken',
      price: '7.00',
      inStock: true
    },
    {
      id: '3',
      name: 'Veggie',
      price: '6.00',
      inStock: true
    }
  ];
  products = this.initProducts;

  getProduct(): Product[] {
    return this.products;
  }
  updateProduct(p: Product): Product[] {

    this.products.forEach((element, index) => {
      if (element.id === p.id) {
        this.products[index] = p;
      }
    });
    console.log('updateProduct', this.products);
    return this.products;

  }
}
