import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsUrl } from 'src/app/config/api';
// const apiUrL = 'http://localhost:3000/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


/*
products: Product[] = [
  new Product(1, 'BETTA 1', 'This is the product 1', 500,
    'https://i.pinimg.com/originals/27/c5/f8/27c5f8f62d5765ca1b6f9dc518061059.png'),
  new Product(2, 'BETTA 2', 'This is the product 2', 300,
    'https://nitrocdn.com/fUnKXkELuoBZQmBrynJRxDgPPalICfwm/assets/static/
    optimized/rev-2fd66a3/wp-content/uploads/2020/02/The-Betta-Siamese-fighting
    -fish-Betta-splendens-Pla-kad-biting-fish--e1582265338348.jpg'),
  new Product(3, 'BETTA 3', 'This is the product 3', 800,
    'https://i.pinimg.com/originals/e4/23/36/e42336e7fe232f363d3dd61792e27984.jpg'),
  new Product(4, 'BETTA 4', 'This is the product 4', 200,
    'https://i.pinimg.com/originals/e0/85/49/e08549fb9118ed8c35517342e11a3b28.jpg'),
  new Product(5, 'BETTA 5', 'This is the product 5', 600,
    'https://cdn.shopify.com/s/files/1/1990/8007/products/marine-betta-calloplesiops-altivelis_500x.jpg?v=1571609912'),
  new Product(6, 'BETTA 6', 'This is the product 5', 400,
    'https://st2.depositphotos.com/2689985/9062/i/450/depositphotos_90622410-stock-photo-betta-fish-siamese-fighting-fish.jpg')
];

*/

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
  //  return this.products;
  return this.http.get<Product[]>(productsUrl);
  }

}
