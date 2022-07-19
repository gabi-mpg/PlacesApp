import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../interfaces/place-results.insterface';

@Pipe({
  name: 'locationPipe'
})
/**
 * Pipe that receives a place and it builds a google map LatLng object using
 * the place's geocodes information
 */
export class LocationPipe implements PipeTransform {

  transform(place: Place): google.maps.LatLng {
    
    const location = new google.maps.LatLng(
          place.geocodes.main.latitude,
          place.geocodes.main.longitude
    );

    return location;
  }

}
