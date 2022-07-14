import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  headers: HttpHeaders = new HttpHeaders();
  apiURL: string = 'https://api.foursquare.com/v3/places/search';

  constructor( private _http: HttpClient) { 
    this.headers.append('Authorization', environment.foursquareApiKey)
        .set('Access-Control-Allow-Origin', 'https://developer.foursquare.com');
  }

  getPlaces() {
    console.log(this.headers.get('Access-Control-Allow-Origin'));
    
    return this._http.get(this.apiURL + '?query=mir&near=tenerife', { headers: this.headers}).subscribe( res => console.log(res) );
      
  }
}
