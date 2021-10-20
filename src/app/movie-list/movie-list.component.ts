import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {
    movies: Movie[] = [];

    constructor(private movieSvc: MovieService) {
    }

    ngOnInit() {
        this.movieSvc.getMovies().subscribe((_movies: Movie[]) => {
            _movies.forEach((d: Movie) => {
                this.movies.push({
                    Id: d.Id,
                    Title: d.Title,
                    Description: d.Description,
                    Thumbnail: d.Thumbnail,
                    ShowSeats: false
                });
            });
        });
    }

    showAvailableSeats(movie: Movie) {
        movie.ShowSeats = !movie.ShowSeats;
        return movie.ShowSeats;
    }
}