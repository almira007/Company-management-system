import { Pipe, PipeTransform } from '@angular/core';
import { Company } from 'src/app/company/model/company.model';

@Pipe({
  name: 'filterRecord'
})
export class FilterRecordPipe implements PipeTransform {

  transform(items: Company[], searchText: string): Company[] {
    if (!items) {
      return items;
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      const data = JSON.stringify(it).toLocaleLowerCase().includes(searchText);
      return data;
    });
  }
}
    