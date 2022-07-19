import { Pipe, PipeTransform } from '@angular/core';
import { Place, Category } from '../interfaces/place-results.insterface';

@Pipe({
  name: 'imageIcon'
})
/**
 * This Pipes recives an object Category and builds a valid img src URL
 * in order to correctly retrieve the icon image
 */
export class ImagePipe implements PipeTransform {

  transform(cat: Category): string {
    const imageURL = cat.icon.prefix + '120' + cat.icon.suffix;
    return imageURL;
  }

}
