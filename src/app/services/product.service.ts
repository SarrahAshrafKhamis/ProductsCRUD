import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  products: IProduct[] = [
    {
      Name: 'prod1',
      Code: '1',
      Price: 300,
      Available: new Date(2021, 6, 1).toLocaleDateString(),
    },
    {
      Name: 'prod2',
      Code: '2',
      Price: 550,
      Available: new Date(2021, 3, 22).toLocaleDateString(),
    },
  ];
  getAllProducts() {
    return this.products;
  }
  addProduct(prod: IProduct) {
    this.products.push({
      Available: prod.Available,
      Code: prod.Code,
      Name: prod.Name,
      Price: prod.Price,
    });
  }
  getProduct(i: number) {
    return this.products[i];
  }
  deleteProduct(i: number) {
    this.products.splice(i, 1);
  }
  updateProduct(list: [IProduct, number]) {
    this.products[list[1]] = list[0];
  }
}
