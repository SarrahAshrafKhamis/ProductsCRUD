import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], x: string): string[] {
    return value.filter((val) => val.indexOf(x) != -1);
  }
}
