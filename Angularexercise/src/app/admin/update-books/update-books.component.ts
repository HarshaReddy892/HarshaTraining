import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { books } from 'src/app/models/books.model';
import { booksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {
  book:books={
    id: 0, name: '', author: '', pages:0, availability:0};
  getbooksbyId: any;

  constructor(private bookService:booksService,private route:Router,private router:ActivatedRoute) { }


  ngOnInit(): void {
    this.getbooksbyId(this.router.snapshot.params['id']);
  }
  public getEmployeeById(id:number):void
  {
   this.bookService.getbooksbyId(id).subscribe((data: any)=>{
     this.book=data;
     console.log(this.book);
   });
  }
public delete(id:number)
{
  this.bookService.deletebook(id).subscribe((response: any)=>{
    console.log(response);
    this.route.navigate(['/list']);
  },(error:any)=>{
    console.log(error);
  })
}
}
