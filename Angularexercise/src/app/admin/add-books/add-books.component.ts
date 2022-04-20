import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { booksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  bookForm: FormGroup;
  isDataLoading=false;



  constructor(private bookService: booksService,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm=this.formBuilder.group({
   
      name:['',Validators.required],
      author:['',Validators.required],
      pages:['',Validators.required],
      availability:['',Validators.required]
    })
  }
  public onFormSubmit(form: NgForm)
  {
    console.log(form);
   
   this.bookService.addbook(form).subscribe(response=>{
     
    console.log(response);
      const id=response['id'];
      
      this.router.navigate(['details',id])
    },(error:any)=>{
      console.log(error);
    })
  }

}
