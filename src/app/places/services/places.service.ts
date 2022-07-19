import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Results, Place } from '../interfaces/place-results.insterface';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Class containing the method that directly connect with the APIs, retrieving the needed
 * information in each case. It uses two base URLs, which both need an HttpHeader containg
 * the API key information.
 */
export class PlacesService {
  
  headers!: HttpHeaders;
  baseURL: string = 'https://api.foursquare.com/v3/places/search';
  baseURLPOI: string = 'https://api.foursquare.com';
  private _placesRecord!: Place[];

  /**
   * Inside the constructor, the header containing the Authorization is initialised
   * and the local storage of the user is got
   * @param _http HttpClient used to get the information from the APIs
   */
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

  /**
   * Getter of the record of places
   */
  get getRecord(){
    return this._placesRecord;
  }

/**
 * This method storages the places visited by the user, limiting the size of it
 * to 40 elements and checking for no doubled elements.
 * @param place Place visited by the user that will be locally storaged
 */
  addToRecord(place: Place){
    if(this._placesRecord !== undefined){
      if( !this._placesRecord.some(e => e.fsq_id == place.fsq_id)){
        this._placesRecord.unshift(place);
        this._placesRecord = this._placesRecord.splice(0,40);
  
        localStorage.setItem('placesRecord', JSON.stringify(this._placesRecord));

      }
    } else {
      this._placesRecord = [place];
      localStorage.setItem('placesRecord', JSON.stringify(this._placesRecord));
    }
  }

  /**
   * Main method that gets all the results from the FOURSQUARE Api based on the
   * near parameter and the query received
   * @param query Query of the search, it can be any string longer that three characters
   * or an '*' 
   * @param near Location to base the results, that have to be close to it.
   * @returns It returns an Observable of Results
   */
  foursquareGet(query: string, near: string): Observable<Results> {
    return this._http.get<Results>(this.baseURL + `?query=${query}&near=${near}&limit=20`, {
      headers: this.headers
    });
  }
  
  /**
   * Method to retrieve the results from the FOURSQUARE API based on the
   * near parameter and the query received, it has a limit of 5 places which are the
   * suggestions used in the autocomplete
   * @param query Query of the search, it can be any string longer that three characters
   * that the user types
   * @param near Location to base the results, that have to be close to it.
   * @returns It returns an Observable of Results
   */
  getSuggestions(query: string, near: string): Observable<Results>{
    return this._http.get<Results>(`${this.baseURL}?query=${query}&near=${near}&limit=5`, {
      headers: this.headers
    }
    );
  }

  /**
   * Method used to retrieve a Place in particular
   * @param endpoint Place's unique link
   * @returns It returns the Place corresponding to the endpoint
   */
  getPlaceLink(endpoint: string): Observable<Place>{
    return this._http.get<Place>(`${this.baseURLPOI}${endpoint}`, {
      headers: this.headers
    });
  }

  /**
   * Method used to retrieve a Place's in particular photo gallery
   * @param endpoint Place's unique link
   * @returns It returns and observable of an Array of Photos
   * corresponding to the Place's endpoint
   */
  getPhotos(endpoint: string): Observable<Photo[]>{
    const url = `${this.baseURLPOI}${endpoint}/photos`;
    return this._http.get<Photo[]>(url, {headers: this.headers});
  }
}
