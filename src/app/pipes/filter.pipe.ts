import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appFilter'
})

export class FilterPipe implements PipeTransform {
  transform(arr, searchStr: string, fieldName: string) {
   if (searchStr === '') {
     return arr;
   }
   return arr.filter((item) => item[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }
}
