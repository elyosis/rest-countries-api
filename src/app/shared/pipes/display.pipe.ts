import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'display'
})
export class DisplayPipe implements PipeTransform {

  transform(value: string, isLast: boolean): string {
    if (isLast) return value
    return `${value}, `;
  }

}
