import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName',
})
export class SearchByNamePipe implements PipeTransform {
  transform(value: object[], propertyName: string, term: string): object[] {
    return value.filter((item) => item[propertyName].includes(term));
  }
}
