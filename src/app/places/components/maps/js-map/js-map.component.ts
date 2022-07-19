import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Place } from 'src/app/places/interfaces/place-results.insterface';
import { Marker } from '../../../interfaces/marker.interface';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { Router } from '@angular/router';

@Component({
  selector: 'app-js-map',
  templateUrl: './js-map.component.html',
  styleUrls: ['./js-map.component.css']
})

/**
 * Class that processes all the needed logic to correctly display the Google JavaScript Map
 * with all its markers.
 */
export class JsMapComponent implements OnInit {

  @Input() places!: Place[];
  @Input() near: string = '';

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow

  infoContent: string = '';
  markers: Marker[] = [];
  
  width = 800;
  height = 800;
  zoom = 10;
  title: string = 'Tittle';
  
  constructor(private _router: Router) { }
  
  /**
   * In this init method we iterate the places array in order to create one marker for
   * each place received.
   */
  ngOnInit(): void {
    this.places.forEach(p => {
      this.addMarker(p);
    })
  }

  /**
   * This method creates an object Marker, using the place info to get the position and the
   * title, and it adds it to the markers Array.
   * @param place Object type of Place 
   */
  addMarker(place: Place) {

    const location = {
      lat: place.geocodes.main.latitude,
      lng:place.geocodes.main.longitude
    }

    const marker: Marker = ({
      position: location,
      title: place.name,
      options: {}
    });

    this.markers.push(marker);
    
  }

  /**
   * Mehtod triggered when an user clicks on a map marker. The windows info is opened
   * showing the name of the place corresponding to the marker clicked. 
   * @param marker Object type of Marker that the user clicked
   * @param content Content that the infoWindow will show, the title of the marker
   */
  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content
    this.info.open(marker)
  }
  
  /**
   * This method is triggered when the user clicks in an opened info window, sending
   * the user to the Place Component containing all the Place's details.
   */
  navigate(){
    const place = this.places.find(p => p.name == this.infoContent.trim())
    this._router.navigate(['/places', place?.link, place?.distance]);
  }
}
