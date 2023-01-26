import { Injectable } from '@angular/core';
import { Book } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private book1 : Book ={
    name: 'The Power of A Positive Attitude: Your Road To Success',
    author: ' Roger Fritz and Ph.D. Edited by Arthur R. Pell',
    language: 'English',
    price: 99,
    imgUrl: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81JByBEqw+S._AC_UY218_.jpg',
    pages: 112,
    publicationDate: '1 September 2019',
    bookDescription: 'Have you ever wondered how your attitude can influence your Success and failure? Have you ever considered the power of saying ‘I Can’, ‘I must’, ‘I will’? “I am not saying a positive attitude can make you successful. I am saying a positive attitude will make you successful.” – Norman Vincent Peale from helping you interpret and understand the true nature of your current attitude to building up self-confidence, which is a must for an affirmative attitude, this book details the dos and don’ts in dealing with your boss, provides handy tips for overcoming negative attitude, managing stress, and coping with burnout, and expounds on how converting negative thinking to positive action can bring about a change in life. Packed with powerful information, The power of a positive attitude will help you uncover your hidden abilities and achieve success.',
    genre: 'Bussiness',
    publisher: 'Fingerprint! Publishing',
    qty: 1
  }

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

  private book3: Book = {
    name: 'Rajaraja Chozhan',
    author: 'Sa.Na. Kannan',
    language: 'Tamil',
    price: 140,
    imgUrl: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51XFA2whlfL._SX322_BO1,204,203,200_.jpg',
    pages: 160,
    publicationDate: '1 December 2011',
    bookDescription: 'This book is written by Sa.Na. Kannan, published by Kizhakku Pathippagam.',
    genre: 'History',
    publisher: 'Kizhakku',
    qty: 1
  }

  private book4: Book = {
    name: 'Velu Nachiyar: Penmaiyin Paeraanmai',
    author: 'Seyon ',
    language: 'Tamil',
    price: 513,
    imgUrl: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51kecMHR5rL._SX331_BO1,204,203,200_.jpg',
    pages: 504,
    publicationDate: '12 February 2020',
    bookDescription: 'This epic novel is all about the never sung warrior in the Indian freedom history, indomitable valour of the Tamil Queen, Velu Nachiyar. She was a ruler of Sivaganga Estate in Tamil Nadu. She and her women warriors sacrificed their lives in the war against the British. She is regarded as the first queen who fought against the British colonial power in India and triumphed to reclaim her dynasty. Also Kuyil who was the captain of her women\'s army was regarded as the first suicide attacker in the world history. Captain Kuyili turned herself as a human bomb in the war against British which was happened in 1780.',
    genre: 'History',
    publisher: 'Notion Press',
    qty: 1
  }

  private book5: Book = {
    name: '20 in 1 All in one story book pack of 4 story books (V1)|children story books in Tamil | All time Favorite, Popular, All time Favorite and Witty stories',
    author: ' Sawan , Manoj Publications Editorial Board, et al.',
    language: 'Tamil',
    price: 328,
    imgUrl: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91xMIRz0DZL._AC_UY218_.jpg',
    pages: 256,
    publicationDate: '1 January 2020',
    bookDescription: '20 in 1 All in One story book pack of 4 story books (V1), children story books of all time favorite akbar-birbal stories, popular Jataka Tales, all time favorite Panchatantra Stories and witty stories of Tenali Raman stories (20 in 1 Series), interesting story books for children\'s in Tamil. Is a store-house of most fabulous and popular stories in the paperback format. Tales in the book have been written in a very lucid language accompanied by coloured illustration that adds to its beauty manifold. Young and old alike are sure to get lost in the world of these tales which hold the reader spellbound.',
    genre: 'Childrens',
    publisher: 'Manoj Publications',
    qty: 1
  }

private books: Book[] = [this.book1, this.book2, this.book3, this.book4, this.book5]
  
  constructor() { }

    getBooks(){
      return this.books
    }
}
