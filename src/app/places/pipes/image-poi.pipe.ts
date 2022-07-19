import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../interfaces/photo.interface';

@Pipe({
  name: 'imagePOI',
})

/**
 * This Pipes recives an object Photo and builds a valid img src URL
 * in order to correctly retrieve the information
 */
export class ImagePOIPipe implements PipeTransform {

  transform(photo: Photo): string {

    const photoURL = photo.prefix + '300x245' + photo.suffix;
    return photoURL;

  }

}
