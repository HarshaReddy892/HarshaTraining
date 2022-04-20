import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


import { MatDialogModule } from '@angular/material/dialog';

import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule

  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule
  ]

})
export class AngularmaterialModule { }
