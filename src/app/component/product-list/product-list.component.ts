import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this._get();
  }
  _get(): Product[] {
    console.log('_get()');
    return this.productService.getProduct();
  }

  _update(p: Product): Product[] {
    console.log(p);
    return this.productService.getProduct();
  }
}
