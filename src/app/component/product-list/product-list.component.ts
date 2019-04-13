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
    setTimeout(this._get(), 1000);
    console.log('ngOnInit');
  }
  _get(): any {
    console.log('_get()');
    this.productService.getProduct().subscribe(products => {
      this.products = products;
    });
  }

  _update(p: Product): void {
    console.log(p);
    this.productService.getProduct();
  }
}
