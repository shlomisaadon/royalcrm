import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArrayOfObject',
})
export class FilterArrayOfObjectPipe implements PipeTransform {
  transform(value: object[], propertyName: string, term: string): object[] {
    return value.filter((item) => item[propertyName].includes(term));
  }
}
