import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    constructor(private http: HttpClient) {}

    getMovies() {
        return this.http.get<Movie[]>('http://localhost:3001/api/movies');
    }
}