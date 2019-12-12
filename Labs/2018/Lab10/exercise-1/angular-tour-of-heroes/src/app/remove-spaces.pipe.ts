import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? value.replace('-', ' ') : value;
  }

}
