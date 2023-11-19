import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preview'
})
export class PreviewPipe implements PipeTransform {

  transform(value: string): string {

    if (!value) return '';

    const finParrafo = value.indexOf('</p>');

    if (finParrafo !== -1) {
      return value.slice(0, finParrafo + 4);
    } else {
      return value.slice(0, 200);
    }
  }
}


