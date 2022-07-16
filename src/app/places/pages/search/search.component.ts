import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Place } from '../../interfaces/place-results.insterface';
import { MatAutocompleteActivatedEvent, MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term: string = '';
  places: Place[] = [];
  selectedPlace!: Place | undefined;

  constructor( private _placesService: PlacesService) {
    
   }

  ngOnInit(): void {
    this._placesService.getSuggestions( 'mirador', 'tenerife')
        .subscribe( results =>         
          {this.places = results.results
          this.selectedPlace = results.results[0];
        console.log(this.selectedPlace);
        }
         );
  }

  search() {
    this._placesService.getSuggestions( this.term.trim(), 'tenerife')
        .subscribe( results =>         
          this.places = results.results
         );
  }

  selectedOption( event: MatAutocompleteActivatedEvent ) {
    
    if(event.option?.value){
      this.selectedPlace = undefined;
      const query = event.option?.value;
      this.term = query.name;

      this._placesService.foursquareGet( query, 'tenerife')
        .subscribe( results => {
          console.log(results);
          this.selectedPlace = results.results[0] 
        });
        
        this.places = [];
      } 
  }

}
