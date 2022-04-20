import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { booksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-show-requested-books',
  templateUrl: './show-requested-books.component.html',
  styleUrls: ['./show-requested-books.component.css']
})
export class ShowRequestedBooksComponent implements OnInit {
 books:any;
  constructor(private bookService:booksService,private route:Router) { }

  ngOnInit(): void {
    
    this.bookService.getUserRequestedbooks().subscribe(res=>{
      this.books=res;

    })
    
  }
  LogOut(){
    this.route.navigate([''])
  }

}
