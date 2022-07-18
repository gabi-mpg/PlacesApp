import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../interfaces/place-results.insterface';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css'],
})
export class PlaceCardComponent implements OnInit {
  @Input() place!: Place;
  @Input() near: string = '';

  constructor(private _placesService: PlacesService) {}

  ngOnInit(): void {
    if (!this.near) {
      this.near = this.place.location.country;
    }
  }
}
