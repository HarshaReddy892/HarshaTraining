import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { books } from 'src/app/models/books.model';
import { booksService } from 'src/app/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SaveBooksComponent } from '../save-books/save-books.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  [x: string]: any;
  requestbook:any
  reqdata:any
  count=0;
  

  displayedColumns:string[]=['id','name','author','pages','availability','actions']
  datasource = new MatTableDataSource<books>();
  data:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private bookservice:booksService, public dialog: MatPaginator, private route :Router,public matDialog:MatDialog
    ,private _toaster:ToastrService) { }


  ngOnInit(): void {
    this.bookservice.getbooks().subscribe((books)=>{
      debugger
      this.datasource=new MatTableDataSource(books);
    })
  }
//   onrequest(book:any){
    
//     // let dialogRef=this.matDialog.open(SaveBooksComponent,{height:'30%',width:'50%'})
//     // dialogRef.componentInstance.book=book;
    
// }


myBooks(){
  this.route.navigate(['show']);
}
LogOut(){
  this.route.navigate([''])
}






public onrequest(data: any) {
  this.requestbook = data;
  this.length();
}
public length() {
  this.bookservice.getUserRequestedbooks().subscribe(res => {
    this.reqdata = res;
    this.countReqData();
  }, error => { console.log(error); })
}

public countReqData() {
  if (this.reqdata) {
    for (var i in this.reqdata) {
      this.count = this.count + 1;
    }
  }
  this.addRequest();
}
public addRequest() {
  if (!this.reqdata || this.count <= 3) {
      this.getRequestedBook();
  }
  else {
    this._toaster.warning("You exceed the limit of book request");
  }
}
public getRequestedBook(){
   let dialogRef=this.matDialog.open(SaveBooksComponent,{height:'30%',width:'50%'})
    dialogRef.componentInstance.book=this.requestbook;
  // this.booksTableService.addRequestedBooks(this.requestbook).subscribe((res) => {
  //   this.data = res;
  //   this.date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  //   // this._toaster.success("Your return date is " + this.date);
  // }, error => { console.log(error); })
}





}
