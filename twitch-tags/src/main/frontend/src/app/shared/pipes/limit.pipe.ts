import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from '../models/tag';

@Pipe({
  name: 'limitTag'
})

export class LimitPipe implements PipeTransform {


  transform(items: Tag[], limit: number) {
    return items.slice(0, limit);
  }

}
