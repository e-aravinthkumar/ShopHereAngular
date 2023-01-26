import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService:CartService){
  }

  getCartItems(){
   return this.cartService.getCartItems()
  }

  removeFromCart(item:any){
    this.cartService.remove(item)
  }

  increaseQty(item:any){
    item.qty++
    console.log(item);
    
  }
  decreaseQty(item:any){
    item.qty--
    console.log(item);    
  }

  totalPrice(){
  }
}
