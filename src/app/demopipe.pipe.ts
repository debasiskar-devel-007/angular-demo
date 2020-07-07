import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demopipe'
})
export class DemopipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null; 
  } 

}
