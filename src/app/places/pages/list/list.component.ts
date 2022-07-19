import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../interfaces/place-results.insterface';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

/**
 * This class is used to display all the places cards, either from the Search Page 
 * or from the List Recent Page.
 * It received a Places Array and the location of the search
 */
export class ListComponent implements OnInit {
  @Input() places!: Place[];
  @Input() near!: string;

  constructor(private _placesService: PlacesService) {}

  /**
   * Inside this method we check if the list component is being required from the Search
   * page or from the List Recents page, in this last case, we retrieve the local data 
   * from the user, using the placesService
   */
  ngOnInit(): void {    
    if (this.places == undefined) {
      this.places = this._placesService.getRecord;
    }
  }
}
