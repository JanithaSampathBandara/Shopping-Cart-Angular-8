import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]>{
  return this.http.get<CartItem[]>(cartUrl).pipe(
    map((result: any[]) => {
      // tslint:disable-next-line:prefer-const
      let cartItems: CartItem[] = [];

      // tslint:disable-next-line:prefer-const
      for (let item of result){
        let productExist = false;

        // tslint:disable-next-line:prefer-const
        for (let i in cartItems){
          if (cartItems[i].productId === item.product.id){
            cartItems[i].qty++;
            productExist = true;
            break;
          }
        }

        if (!productExist){
          cartItems.push(new CartItem(item.id, item.product));
        }
      }

      return cartItems;
    })
  );
  }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, { product });
  }
}
