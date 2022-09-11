import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicRoutingModule} from "./public-routing.module";
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FlexModule,
    MatCardModule
  ]
})
export class PublicModule { }
