import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems = [
  /*
  {id: 1, productId: 2, qty: 3, productName: 'BETTA 1', price: 200 },
  {id: 2, productId: 4, qty: 2, productName: 'BETTA 2', price: 400 },
  {id: 3, productId: 8, qty: 4, productName: 'BETTA 3', price: 600 },
  {id: 4, productId: 3, qty: 6, productName: 'BETTA 4', price: 500 }
*/
];

  cartTotal = 0;

  constructor(
    private msg: MessengerService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }


// tslint:disable-next-line:typedef
handleSubscription(){
  this.msg.getMessage().subscribe((product: Product) => {
    // this.addProductToCart(product);
  this.loadCartItems();
  });
}

// tslint:disable-next-line:typedef
loadCartItems(){
this.cartService.getCartItems().subscribe((items: CartItem[]) => {
  this.cartItems = items;
  this.calculateCartTotal();
});
}
// tslint:disable-next-line:typedef

/*

addProductToCart(product: Product){

let productExist = false;

// tslint:disable-next-line:prefer-const
for (let i in this.cartItems){
  if (this.cartItems[i].productId === product.id){
    this.cartItems[i].qty++;
    productExist = true;
    break;
  }
}

if (!productExist){
  this.cartItems.push({
    productId: product.id,
    productName: product.name,
    qty: 1,
    price: product.price
  });
}

this.calculateCartTotal();
}

*/

// tslint:disable-next-line:typedef
calculateCartTotal(){
  this.cartTotal = 0;
  // tslint:disable-next-line:align
  this.cartItems.forEach(item => {
  this.cartTotal += (item.qty * item.price);
});
}
}
