import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTabsModule} from '@angular/material/tabs'
import {MatTableModule} from '@angular/material/table'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'


@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  imports: [
    CommonModule,
    
  ]
})
export class MaterialModule {
 }
