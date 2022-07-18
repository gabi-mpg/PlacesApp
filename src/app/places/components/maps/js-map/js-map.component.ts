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
  zoom = 9;
  title: string = 'Tittle';
  
  constructor(private _router: Router) { }
  
  ngOnInit(): void {
    this.places.forEach(p => {
      this.addMarker(p);
    })
  }

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

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content
    this.info.open(marker)
  }
  
  navigate(){
    this._router.navigate(['/places', this.near, this.infoContent.trim()]);
  }
}
