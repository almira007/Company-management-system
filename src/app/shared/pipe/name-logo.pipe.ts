import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLogo'
})
export class NameLogoPipe implements PipeTransform {

  transform(value: any): string {
    value = value.toUpperCase();
    const nameLogo = value.charAt(0) + value.charAt(1);
    console.log(nameLogo)
    return nameLogo;
  }
  
}
