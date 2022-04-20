import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { books } from '../models/books.model';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class booksService {
  editBook(bookData: NgForm) {
    throw new Error('Method not implemented.');
  }
  baseUrl='http://localhost:3000/books';
  getbooksbyId: any;
 constructor(private http:HttpClient) { }
 private handleError(errorResponse:HttpErrorResponse)
 {
   if(errorResponse.error instanceof ErrorEvent)
   {
     console.log('Client Side Error',errorResponse.error);
   }
   else
   {
     console.log('Server Side error',errorResponse.error);
   }

   return throwError('their is error in code');
 }

 public getbooks():Observable<books[]>{
   debugger;
 return this.http.get<books[]>(this.baseUrl).pipe(catchError(this.handleError));
 }
   

 public getbookById(id:number):Observable<books>{
   const url=`${this.baseUrl}/${id}`;
   return this.http.get<books>(url).pipe(catchError(this.handleError));
 }
 public addbook(emp:any):Observable<books>{
  return this.http.post<books>(this.baseUrl,emp);
}

public deletebook(id:number):Observable<books>{
  const url=`${this.baseUrl}/${id}`;
  return this.http.delete<books>("http://localhost:3000/books/"+id).pipe(catchError(this.handleError));
}
public editbooks(data:any,id:any):Observable<books>{
  
  const url=`${this.baseUrl}/${id}`;
  return this.http.put<books>(url,data).pipe(catchError(this.handleError));
}
public postUserBooks(book:any){
  this.http.post("http://localhost:3000/returnedBooks",book).subscribe(res=>{console.log(res)
  
})
}
public getUserRequestedbooks():Observable<books[]>{
  debugger;
return this.http.get<books[]>("http://localhost:3000/returnedBooks").pipe(catchError(this.handleError));
}
}

