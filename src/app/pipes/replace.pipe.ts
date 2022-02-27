import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, x: string, y: string): string {
    return value.replace(new RegExp(x, 'g'), y);
  }
}
