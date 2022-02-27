import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.products = this.productService.getAllProducts();
  }
  products: IProduct[] = [];
  prod: IProduct | null = null;
  uProd: IProduct | null = null;
  uIndex: number = 0;
  showImages: boolean = true;
  toggleShowImages() {
    this.showImages = !this.showImages;
  }
  show(i: number) {
    this.prod = this.productService.getProduct(i);
  }
  delete(i: number) {
    this.productService.deleteProduct(i);
  }
  toUpdate(i: number) {
    this.uProd = {
      Name: this.products[i].Name,
      Code: this.products[i].Code,
      Available: this.products[i].Available,
      Price: this.products[i].Price,
    };
    this.uIndex = i;
  }
}
