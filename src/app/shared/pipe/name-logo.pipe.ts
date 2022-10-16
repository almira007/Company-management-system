import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLogo'
})
export class NameLogoPipe implements PipeTransform {

  transform(value: any): string {
    value = value.toUpperCase();
    const nameArray = value.split(' ');

    if (nameArray.length > 1) {
      return nameArray[0].charAt(0) + nameArray[1].charAt(0);
    } else {
      return nameArray[0].charAt(0) + nameArray[0].charAt(1);
    }
  }

}
