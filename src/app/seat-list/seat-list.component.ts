import { Component, OnInit } from '@angular/core';
import { Seat } from '../seat';
import { ActivatedRoute, Router } from '@angular/router';
import { SeatService } from '../seats.service';

@Component({
    selector: 'app-seat-list',
    templateUrl: './seat-list.component.html',
    styleUrls: ['./seat-list.component.scss']
})

export class SeatListComponent implements OnInit {
    seats: Array<Seat> = [];

    constructor(private route: ActivatedRoute, private seatSvc: SeatService, private router: Router) {

    }

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        const movieId = Number(routeParams.get('MovieId'));
        this.seatSvc.getSeats(movieId).subscribe((_seats: Seat[]) => {
            _seats.forEach((s: Seat) => {
                this.seats.push({
                    Id: s.Id,
                    MovieId: s.MovieId,
                    Occupied: s.Occupied,
                    SeatLocation: s.SeatLocation
                });
            });
        });
    }

    selectSeat (seat: Seat) {
        seat.Occupied = !seat.Occupied;
    }
}