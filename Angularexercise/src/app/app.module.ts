import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AddBooksComponent } from './admin/add-books/add-books.component';
import { UpdateBooksComponent } from './admin/update-books/update-books.component';
import { BooksListComponent } from './admin/books-list/books-list.component';
import { AngularmaterialModule } from './featureModule/angularmaterial/angularmaterial.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { EditBooksComponent } from './admin/edit-books/edit-books.component';
import { RequestComponent } from './Employee/request/request.component';
import { ShowRequestedBooksComponent } from './Employee/show-requested-books/show-requested-books.component';
import { SaveBooksComponent } from './Employee/save-books/save-books.component';
import { ToastrModule } from 'ngx-toastr';

@Injectable({
  providedIn: 'root' // just before your class
})
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddBooksComponent,
    UpdateBooksComponent,
    BooksListComponent,
    EditBooksComponent,
    RequestComponent,
    ShowRequestedBooksComponent,
    SaveBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [BooksListComponent,MatPaginator],
  bootstrap: [AppComponent]
})
export class AppModule { }
