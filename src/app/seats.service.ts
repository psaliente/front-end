import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seat } from './seat';

@Injectable({
    providedIn: 'root'
})

export class SeatService {

    constructor(private http: HttpClient) {}

    getSeats(movieId: Number) {
        return this.http.get<Seat[]>(`/api/seats?MovieId=${movieId}`);
    }
}