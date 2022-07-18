import { Component, OnInit } from '@angular/core';
import { Place } from '../../interfaces/place-results.insterface';
import { PlacesService } from '../../services/places.service';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Photo } from '../../interfaces/photo.interface';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
})
export class PlaceComponent implements OnInit {
  link: string = '';
  distance: string = '';
  mapURL: string = '';
  baseURL: string = 'https://maps.googleapis.com/maps/api/staticmap?';
  key: string = environment.googleMapsApiKey;
  place!: Place;
  photos: Photo[] = [];

  constructor(
    private _placeService: PlacesService,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.link = params['link'];
      this.distance = params['dist'];
      
    });
    
    this.getPlan();
  }

  getPlan() {
    this._placeService.getPlaceLink(this.link).subscribe({
      next: (res) => {
        
        if (res) {
          this.place = res;
          this.place.distance = Number(this.distance);            
          this._placeService.getPhotos(this.place.link).subscribe((photos) => {
            if (photos.length > 0) {
              this.photos = photos;
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
