import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from './tree/tree.component';
import { TreeService } from './tree.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    CommonModule,
    FormsModule,
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
