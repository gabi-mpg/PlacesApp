import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Results } from '../interfaces/place-results.insterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  headers!: HttpHeaders;
  baseURL: string = 'https://api.foursquare.com/v3/places/search';

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders().set(
      'Authorization',
      environment.foursquareApiKey
    );
  }

  getPlaces(query: string, near: string) {
    console.log(this.headers.get('Access-Control-Allow-Origin'));

    return this._http
      .get(this.baseURL + '?query=restaurant&near=chicago', {
        headers: this.headers,
      })
      .subscribe((res) => console.log(res));
  }

  foursquareGet(query: string, near: string): Observable<Results> {
    // return this._http.get<Results>('https://api.foursquare.com/v3/places/search?query=mir&near=tenerife', {
    //   headers: this.headers
    // });
    return this._http.get<Results>(this.baseURL + `?query=${query}&near=${near}`, {
      headers: this.headers
    });
  }

  getSuggestions(term: string, near: string): Observable<Results>{
    return this._http.get<Results>(`${this.baseURL}?query=${term}&near=${near}&limit=6`, {
      headers: this.headers
    }
    );
  }
}
