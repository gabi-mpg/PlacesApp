import { Component, Input, OnInit } from '@angular/core';
import { Place, Results } from '../../interfaces/place-results.insterface';
import { PlacesService } from '../../services/places.service';
import { ActivatedRoute, Params } from '@angular/router';
import { LocationPipe } from '../../pipes/location.pipe';
import { environment } from '../../../../environments/environment';
import { POI } from '../../interfaces/places-poi.interface';
import { Photo } from '../../interfaces/photo.interface';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
})
export class PlaceComponent implements OnInit {
  near: string = '';
  name: string = '';
  mapURL: string = '';
  baseURL: string = 'https://maps.googleapis.com/maps/api/staticmap?';
  key: string = 'AIzaSyBxl8gPo0L8NVDBiyyOXnNLUzVzWwTyze4';
  // key: string = environment.googleMapsApiKey;
  place!: Place;
  photos: Photo[] = [];

  constructor(
    private _placeService: PlacesService,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.near = params['near'];
      this.name = params['name'];
    });

    this.getPlan();
  }

  getPlan() {
    this._placeService.getPlace(this.name, this.near).subscribe({
      next: (res) => {
        if (res.results.length > 0) {
          this.place = res.results[0];
          console.log(this.place);

          this._placeService.getPhotos(this.place.link).subscribe((photos) => {
            if (photos.length > 0) {
              this.photos = photos;
              console.log(photos);
            }
            this._placeService.addToRecord(this.place);
            this.getMapURL();
          });
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getMapURL() {
    const lat = this.place.geocodes.main.latitude;
    const lng = this.place.geocodes.main.longitude;
    const location = `${lat},${lng}`;

    this.mapURL = `${this.baseURL}center=${location}&zoom=1$scale=2&size=1000x200&markers=color:red%7C${location}&key=${this.key}`;
  }
}
