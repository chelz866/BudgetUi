import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleDialogComponent } from './Dialogs/sample-dialog/sample-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    SampleDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
