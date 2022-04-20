import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './admin/add-books/add-books.component';
import { BooksListComponent } from './admin/books-list/books-list.component';
import { EditBooksComponent } from './admin/edit-books/edit-books.component';
import { AppComponent } from './app.component';
import { RequestComponent } from './Employee/request/request.component';
import { ShowRequestedBooksComponent } from './Employee/show-requested-books/show-requested-books.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',component: AppComponent,
    children: [
      { path: '', component: LoginComponent}
    ]
  },
  {path:'list',component:BooksListComponent},
  {path:'add-book',component:AddBooksComponent},
  {path:'edit-book',component:EditBooksComponent},
  {path:'request',component:RequestComponent},
  {path:'show',component:ShowRequestedBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
