import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [{
  path: '', component: MovieListComponent
}, {
  path: 'movies/:MovieId', component: SeatListComponent
}, {
  path: 'payment', component: TransactionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
