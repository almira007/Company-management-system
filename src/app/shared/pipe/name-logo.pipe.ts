import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLogo'
})
export class NameLogoPipe implements PipeTransform {

  transform(value: string){
    let names = value.split(''),
    initials = names[0].substring(0,1).toUpperCase();

    if(names.length > 1){
      initials += names[names.length - 1].substring(0,1).toUpperCase();
    }
    return initials;
    // value = value.toUpperCase();
    // const nameLogo = value.charAt(0) + value.charAt(1);
    // console.log(nameLogo)
    // return nameLogo;
  }
}
