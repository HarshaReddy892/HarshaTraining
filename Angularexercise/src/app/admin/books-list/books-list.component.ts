import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { books } from 'src/app/models/books.model';
import { booksService } from 'src/app/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditBooksComponent } from '../edit-books/edit-books.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  [x: string]: any;
  displayedColumns:string[]=['id','name','author','pages','availability','actions']
  datasource = new MatTableDataSource<books>();
  data:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private bookservice:booksService, public dialog: MatPaginator, private route :Router,public matDialog:MatDialog) { }
  

  ngOnInit(): void {
    this.bookservice.getbooks().subscribe((books)=>{
      debugger
      this.datasource=new MatTableDataSource(books);
    })


  
  }

onDelete(id:any){
  console.log("click")
  this.bookservice.deletebook(id).subscribe(()=>{console.log()});

}
onEdit(element: any){
  this.data= element;
  console.log(element)
  // this.route.navigate(['edit-book']);
  
  let dialogRef=this.matDialog.open(EditBooksComponent,{height:'30%',width:'50%'})
  dialogRef.componentInstance.book=element;
}
LogOut(){
  this.route.navigate([''])
}

}
