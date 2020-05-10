import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  // //// should be private
  filters = (values: any): string => {
    return values.filter(val =>
      val.key !== 'id' &&
      val.key !== 'address' &&
      val.key !== 'noeVagozari' &&
      val.key !== 'counterSerial' &&
      val.key !== 'fatherName' &&
      val.key !== 'khodgardanTitle'
    )
  }

  transform(values: any): any {
    if (!values || typeof values !== "object") return values;
    return this.filters(values);
  }

}
