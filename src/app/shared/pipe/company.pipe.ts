import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'company'
})
export class CompanyPipe implements PipeTransform {

  transform(value: any): string {
    value = value.toUpperCase();
    const companyName = value.split(' ');
    const nameLogo = companyName[0].charAt(0) + companyName[1].charAt(0);
    return nameLogo;
  }

}
