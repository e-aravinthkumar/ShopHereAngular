import { Component } from '@angular/core';
import { Book } from 'src/app/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: Book[];
  constructor(private productService: ProductService){
    this.books= this.productService.getBooks()
  } 
}
