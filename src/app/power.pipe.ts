import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPower'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, pow: number = 1, full: boolean = false): number {
    if(full){
      return value + ' ^ ' + pow + ' = ' + Math.pow(value, pow);
    }
    return Math.pow(value, pow);
  }

}
