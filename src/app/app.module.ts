import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './transaction/transaction.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeatListComponent } from './seat-list/seat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    MovieListComponent,
    SeatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
