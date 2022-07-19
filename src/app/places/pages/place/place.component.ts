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

/**
 * Class where the detailed information of the Place is displayed. It uses the parameters 
 * received through the route to get the place, using the Places Service.
 */
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

  /**
   * In the Init method we collect the infor received through the route, which
   * are the link to retrieve the place and the info of the distance from the location
   * given by the user. 
   */
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.link = params['link'];
      this.distance = params['dist'];
      
    });
    
    this.getPlan();
  }

  /**
   * Method used to retrieve the place from the API, the photos gallery, adding the 
   * place to the record, all using the Places Service and it calls the method to build the 
   * google static map URL.
   */
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

  /**
   * This method builds the URL of the google static map using the place info
   */
  getMapURL() {
    const lat = this.place.geocodes.main.latitude;
    const lng = this.place.geocodes.main.longitude;
    const location = `${lat},${lng}`;

    this.mapURL = this.baseURL + 'center=' + location 
                    + '&zoom=1$scale=2&size=1000x200&markers=color:red%7C'
                    + location + '&key=' + this.key;
                    
  }
}
