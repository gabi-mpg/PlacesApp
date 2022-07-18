import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../interfaces/place-results.insterface';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() places!: Place[];
  @Input() near!: string;

  constructor(private _placesService: PlacesService) {}

  ngOnInit(): void {
    console.log(this.places);
    
    if (this.places == undefined) {
      this.places = this._placesService.getRecord;
    }
  }
}
