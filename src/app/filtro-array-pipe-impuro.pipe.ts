import { Pipe, PipeTransform } from '@angular/core';
import { FiltroarrayPipe } from './filtroarray.pipe';

@Pipe({
  name: 'filtroArrayPipeImpuro',
  pure: false
})
export class FiltroArrayPipeImpuroPipe extends FiltroarrayPipe {

}
