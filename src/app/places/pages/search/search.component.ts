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
export class SearchComponent implements OnInit {
  @ViewChild('txtSearch') txtSearch!: ElementRef;
  @ViewChild('txtNear') txtNear!: ElementRef;
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

  ngOnInit(): void {}

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

  selectedOption(event: MatAutocompleteActivatedEvent) {
    if (event.option?.value) {
      this.term = event.option?.value;
    }
  }

  /**
   * This method checks the data from the inputs
   * @returns 
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

  showMessage(message: string) {
    this._snackBar.open(message, 'Ok!', {
      duration: 4000,
      panelClass: ['snackError'],
    });
  }
}
