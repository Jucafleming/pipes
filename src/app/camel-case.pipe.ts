import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let values = value.split(' ')
    let result = ''
    for (let v of values){
      result+= this.capittalize(v) + ' '
    }
    return result;
  }

  capittalize(valor: any){
   return valor.substring(0,1).toUpperCase() + valor.substring(1).toLocaleLowerCase()

  }

}
