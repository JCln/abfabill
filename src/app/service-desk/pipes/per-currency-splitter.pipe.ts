import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perCurrencySplitter'
})
export class PerCurrencySplitterPipe implements PipeTransform {
  isNull = (value: any) =>
    typeof value === "undefined";

  numberWithCommas(x) {
    return x.toLocaleString('ar-EG');
  }

  transform(value: any, ...args: any[]): any {
    if (this.isNull(value)) return;
    const currNumber = value;
    return this.numberWithCommas(currNumber);
  }

}
