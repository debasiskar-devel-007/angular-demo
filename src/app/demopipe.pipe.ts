import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demopipe'
})
export class DemopipePipe implements PipeTransform {

  transform(value: any, range1: number, range2: number): any {
    return ((value - range1) + " To " + (value + range2));
  }

}
