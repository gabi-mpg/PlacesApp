import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../interfaces/place-results.insterface';

@Pipe({
  name: 'distance'
})
/**
 * Pipe used to transform the distance of the place from meters to kms, with only
 * one decimal
 */
export class DistancePipe implements PipeTransform {

  transform(place: Place): string {
    return (place.distance / 1000).toFixed(1);
  }

}
