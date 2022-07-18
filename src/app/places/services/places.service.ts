import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Results, Place } from '../interfaces/place-results.insterface';
import { Observable } from 'rxjs';
import { POI } from '../interfaces/places-poi.interface';
import { Photo } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  
  headers!: HttpHeaders;
  baseURL: string = 'https://api.foursquare.com/v3/places/search';
  baseURLPOI: string = 'https://api.foursquare.com';
  private _placesRecord!: Place[];

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders().set(
      'Authorization',
      environment.foursquareApiKey
    );     

    const storage = localStorage.getItem('placesRecord');
      
    if(storage){
      this._placesRecord = JSON.parse( storage );
    }
  }

  get getRecord(){
    return this._placesRecord;
  }


  addToRecord(place: Place){
    if(this._placesRecord !== undefined){
      if( !this._placesRecord.some(e => e.fsq_id === place.fsq_id)){
        this._placesRecord.unshift(place);
        this._placesRecord = this._placesRecord.splice(0,40);
  
        localStorage.setItem('placesRecord', JSON.stringify(this._placesRecord));

      }
    } else {
      this._placesRecord = [place];
      localStorage.setItem('placesRecord', JSON.stringify(this._placesRecord));
    }
  }

  getPlace(query: string, near: string): Observable<Results> {    
    return this._http.get<Results>(this.baseURL + `?query=${query}&near=${near}&limit=4`, {
      headers: this.headers
    });
  }

  foursquareGet(query: string, near: string): Observable<Results> {
    return this._http.get<Results>(this.baseURL + `?query=${query}&near=${near}&limit=20`, {
      headers: this.headers
    });
  }

  getSuggestions(term: string, near: string): Observable<Results>{
    return this._http.get<Results>(`${this.baseURL}?query=${term}&near=${near}&limit=5`, {
      headers: this.headers
    }
    );
  }

  getPOI(endpoint: string): Observable<POI>{
    return this._http.get<POI>(`${this.baseURLPOI}${endpoint}`, {
      headers: this.headers
    });
  }

  getPhotos(endpoint: string): Observable<Photo[]>{
    const url = `${this.baseURLPOI}${endpoint}/photos`;
    return this._http.get<Photo[]>(url, {headers: this.headers});
  }
}
