import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cart-item.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems$: Observable<CartItem[]>;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems$ = this.cartService.getCart();
  }

}
