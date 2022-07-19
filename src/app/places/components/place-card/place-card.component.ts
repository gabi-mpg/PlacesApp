import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../interfaces/place-results.insterface';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css'],
})

/**
 * This class receives a Place and it creates a Material Card using 
 * basic information of the place. It also recieves the location that the user typed
 * in order to show it on the results title.
 */
export class PlaceCardComponent implements OnInit {
  @Input() place!: Place;
  @Input() near: string = '';

  constructor() {}

  /**
   * In this init method, we check if near has any value, in the case it is an empty 
   * string, the country of the place is used. 
   */
  ngOnInit(): void {
    if (!this.near) {
      this.near = this.place.location.country;
    }
    
  }
}
