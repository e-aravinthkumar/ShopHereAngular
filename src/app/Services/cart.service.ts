import { Injectable } from '@angular/core';
import { Book } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }

  
  private book2: Book = {
    name: 'The Richest Man in Babylon (Tamil)',
    author: ' George S. Clason ',
    language: 'Tamil',
    price: 109,
    imgUrl: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/419GPEvGNuS._SX460_BO1,204,203,200_.jpg',
    pages: 160,
    publicationDate: '1 December 2019',
    bookDescription: 'If you have a Lean purse and are looking for financial wisdom, you?ve picked the perfect book! ?A part of all you earn is yours to keep.? from the importance of savings to the essentials on how to become wealthy, this collection of famous babylonian parables imparts timeless financial wisdom. It offers insights on how to become wealthy and how to attract good luck and discusses the five laws of gold. A perfect guide to understanding finances and a powerhouse of time-tested principles to gain and retain personal wealth, the richest man in Babylon has been inspiring readers for generations. It continues to remain a classic bestseller.',
    genre: 'Bussiness',
    publisher: 'Fingerprint! Publishing',
    qty: 1
  }
  private cart: any[] = [this.book2]
  

  isIteminCart(item:any){
    if(this.cart.includes(item))
    return true
    else return false
  }

  add(item:any){
   if(!this.cart.includes(item))
   this.cart.push(item)
  }


  getCartItems(){
    return this.cart
  }

  remove(item: any){
    this.cart = this.cart.filter(i=>i!=item)
  }  
  
}
