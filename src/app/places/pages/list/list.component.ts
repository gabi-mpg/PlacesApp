import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../interfaces/place-results.insterface';
import { PlacesService } from '../../services/places.service';
import { POI } from '../../interfaces/places-poi.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() POI!: POI[];
  @Input() places!: Place[];
  @Input() near!: string;

  constructor(private _placesService: PlacesService) {}

  ngOnInit(): void {
    if (this.places === undefined) {
      this.places = this._placesService.getRecord;
    }
  }
}
