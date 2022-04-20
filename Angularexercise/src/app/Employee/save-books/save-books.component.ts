import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { booksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-save-books',
  templateUrl: './save-books.component.html',
  styleUrls: ['./save-books.component.css']
})
export class SaveBooksComponent implements OnInit {
  book:any
  date:any
  constructor(private bookservice:booksService) { }

  ngOnInit(): void {
    this.date = new Date();

    this.date.setDate( this.date.getDate() + 6 );
    console.log("click")
    this.getBooks();   
  }
  getBooks(){
    this.bookservice.postUserBooks(this.book);

  }
  

}
