import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor(
    private msg: MessengerService,
    private cartService: CartService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMessage(this.productItem);
    });
  }
}
