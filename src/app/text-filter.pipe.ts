import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(list, filter: string, fieldName: string = ''): any {
    if(list.length === 0 || filter === '') {
      return list;
    }

    if(fieldName !== ''){
      //return list.filter(car => car.name === filter); // strict occurences
      //return list.filter(car => car.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);   // return list of all items with filter occurences (not strict)
      return list.filter(item => ~item[fieldName].toLowerCase().indexOf(filter.toLowerCase()));   // the same ^
    }

    return list.filter(item => ~item.toLowerCase().indexOf(filter.toLowerCase())); // for strings
  }

}
