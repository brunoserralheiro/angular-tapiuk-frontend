import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';

import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() { }

  onPriceUpdate(product: Product, newPrice) {
    console.log('onPriceUpdate', product);

    product.price = newPrice;

    this._update(product);
  }
  onProductUpdate(p: Product) {

    p.inStock = !p.inStock;

    console.log('click', p);
  }

  onCreate(): void { }

  onDelete(): void { }

  _get(): void { }

  _update(p: Product): void {
    console.log('_update', p);
    this.productService.updateProduct(p).subscribe(o => console.log('callback', o));
  }

  // set dynamic css classes
  setClass() {

    let classes = {
      product: true,
      'is-inStock': this.product.inStock
    };
    return classes;
  }
}
