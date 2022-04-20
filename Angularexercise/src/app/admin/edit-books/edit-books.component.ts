import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { books } from 'src/app/models/books.model';
import { booksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {
 
  book:books;
  
  public reactiveFormBook:FormGroup;
  constructor(private formBuilder:FormBuilder,private bookService:booksService,public matDialogRef:MatDialogRef<EditBooksComponent>,
    private _router:Router) { }
  ngOnInit(): void {
    this.reactiveFormBook=this.formBuilder.group({
      id:[],
      name:['',[Validators.required]],
      author:['',[Validators.required]],
      Pages:['',[Validators.required]],
      availability:['',[Validators.required]]
    })


    this.reactiveFormBook.patchValue({
    
      id:this.book.id,
      name:this.book.name,
      author:this.book.author,
      pages:this.book.pages,
      availability:this.book.availability
    })
  }

  public onSubmit(bookData:NgForm){
     this.bookService.editbooks(bookData,this.book.id).subscribe((res: any)=>{console.log(res)
    }, error =>{console.log(error)})

  }

}
