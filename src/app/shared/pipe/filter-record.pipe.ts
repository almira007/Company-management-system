import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRecord'
})
export class FilterRecordPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    value.toUpperCase
    // if(value.length === 0){
    //   return value;
    // }
    // return value.filter(function(search: any){
    //    return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    // });
  }

}
