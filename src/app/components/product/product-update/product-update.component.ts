import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent {
  constructor(private productService: ProductService) {}
  @Input() i: number = 0;
  @Input() prod: IProduct | null = {
    Name: '',
    Available: '',
    Code: '',
    Price: 0,
  };
  update() {
    if (this.prod)
      if (this.prod.Name.length > 0) {
        this.productService.updateProduct([this.prod, this.i]);
        this.prod = null;
      }
  }
}
