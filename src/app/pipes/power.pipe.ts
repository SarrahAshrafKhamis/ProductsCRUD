import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
})
export class PowerPipe implements PipeTransform {
  transform(value: number, x: number): number {
    return Math.pow(value, x);
  }
}
