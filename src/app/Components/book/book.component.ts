import { Component, Input } from '@angular/core';
import { Book } from 'src/app/Product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private cartService: CartService){}
  @Input('book') 
  book!: Book

  isIteminCart(){
    return this.cartService.isIteminCart(this.book)   
  }

  addToCart(){
    this.cartService.add(this.book)
  }

  removeFromCart(){
    this.cartService.remove(this.book)
  }

}
