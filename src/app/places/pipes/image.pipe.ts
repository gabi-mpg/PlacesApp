import { Pipe, PipeTransform } from '@angular/core';
import { Place, Category } from '../interfaces/place-results.insterface';

@Pipe({
  name: 'imageIcon'
})
export class ImagePipe implements PipeTransform {

  transform(cat: Category): string {
    const imageURL = cat.icon.prefix + '120' + cat.icon.suffix;
    return imageURL;
  }

}
