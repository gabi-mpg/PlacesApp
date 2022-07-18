import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../interfaces/place-results.insterface';
import { POI } from '../../interfaces/places-poi.interface';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css'],
})
export class PlaceCardComponent implements OnInit {
  @Input() place!: Place;
  @Input() POIData: POI[] = [];
  @Input() near: string = '';

  POI: POI | undefined;

  constructor(private _placesService: PlacesService) {}

  ngOnInit(): void {
    if (!this.near) {
      this.near = this.place.location.country;
    }

    this._placesService
      .getPOI(this.place.link)
      .subscribe((e) => (this.POI = e));
  }
}
