import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'company'
})
export class CompanyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
