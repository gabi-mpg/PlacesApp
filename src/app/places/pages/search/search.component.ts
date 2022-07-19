import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Place } from '../../interfaces/place-results.insterface';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

/**
 * Class where all the search logic is contained
 */
export class SearchComponent{

  term: string = '';
  near: string = '';
  places: Place[] = [];
  nearSend: string = '';
  termSend: string = '';
  isError: boolean = false;
  isSearch: boolean = false;

  constructor(
    private _placesService: PlacesService,
    private _snackBar: MatSnackBar
  ) {}

  /**
   * This method is triggered when the user types on the search input, getting
   * the suggested places based in the location and the term typed
   */
  search() {
    this.places = [];
    this._placesService
      .getSuggestions(this.term.trim(), this.near.trim())
      .subscribe({
        next: (res) => {
          this.places = res.results;
          this.isError = false;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  /**
   * This method equals the value of the option selected to the term variable of the
   * class
   * @param event It receives the event occurred when a user selects an option
   * from the material autocomplete element, containing the info about it.
   */
  selectedOption(event: MatAutocompleteActivatedEvent) {
    if (event.option?.value) {
      this.term = event.option?.value;
    }
  }

  /**
   * This method checks the data from the inputs and it calls the method that
   * retrieves the place info only when all the data is correct.
   */
  searchAll() {
    if (!this.near) {
      this.showMessage('You need to enter a location');
      return;
    }

    if (this.near && this.term.length == 0) {
      this.term = '*';
    }

    this.getPlaces();
  }

  /**
   * This method is called when the search parameters are correct. It establishes the search
   * flag as true, stores the terms so the value can still be used by the html and it calls
   * the method in the places service that retrieves the data, cheking the results
   */
  getPlaces() {
    this.isSearch = true;
    this.nearSend = this.near;
    this.termSend = this.term;
    this._placesService
      .foursquareGet(this.term.trim(), this.near.trim())
      .subscribe({
        next: (res) => {
          if (res.results.length == 0) {
            this.isSearch = false;
            this.isError = true;
          } else {
            this.places = res.results;
            this.isError = false;
          }
        },
        error: (err) => {
          this.isError = true;
          console.log(err);
          this.term = '';
          this.near = '';
        },
      });
  }

  /**
   * Method to build a snackbar
   * @param message String containing the message that must be displayed in the snackbar
   */
  showMessage(message: string) {
    this._snackBar.open(message, 'Ok!', {
      duration: 4000,
      panelClass: ['snackError'],
    });
  }
}
