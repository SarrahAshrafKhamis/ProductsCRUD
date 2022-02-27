import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  constructor(private productService: ProductService) {}
  prod: IProduct = { Name: '', Code: '', Price: 0, Available: '' };
  add() {
    if (this.prod.Name.length > 0) {
      this.productService.addProduct(this.prod);
    }
  }
}
