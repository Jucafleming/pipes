import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroarray'
})
export class FiltroarrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.lenght === 0 || args === undefined){
      return value
    }
    let filter = args.toLocaleLowerCase()
    return value.filter((v: string)=>v.toLocaleLowerCase().indexOf(filter)!=-1)
  }

}
