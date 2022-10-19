import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRecord'
})
export class FilterRecordPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.companyName.toLocaleLowerCase().includes(searchText);
    });
  }
}
