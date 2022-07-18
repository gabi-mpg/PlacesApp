import { Pipe, PipeTransform } from '@angular/core';
import { POI } from '../interfaces/places-poi.interface';
import { Photo } from '../interfaces/photo.interface';

@Pipe({
  name: 'imagePOI',
})
export class ImagePOIPipe implements PipeTransform {

  transform(photo: Photo): string {

    const photoURL = photo.prefix + '300x245' + photo.suffix;
    return photoURL;

  }

}
