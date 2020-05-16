import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberInfo'
})
export class MemberInfoPipe implements PipeTransform {

  isNull = () => { }
  convertedName = (val: string): string => {
    switch (val) {
      case 'radif':
        return val.replace('radif', 'ردیف');
      case 'billId':
        return val.replace('billId', 'شناسه قبض');
      case 'eshterak':
        return val.replace('eshterak', 'اشتراک');
      case 'firstName':
        return val.replace('firstName', 'نام');
      case 'sureName':
        return val.replace('sureName', 'نام خانوادگی');
      case 'karbari':
        return val.replace('karbari', 'کاربری');
      case 'qotr':
        return val.replace('qotr', 'قطر');
      case 'siphon':
        return val.replace('siphon', 'سیفون');
      case 'zoneTitle':
        return val.replace('zoneTitle', 'منطقه');
      case 'domesticUnit':
        return val.replace('domesticUnit', 'مسکونی');
      case 'nonDomesticUnit':
        return val.replace('nonDomesticUnit', 'غیر مسکونی');
      case 'address':
        return val.replace('address', 'آدرس');
      case 'capacity':
        return val.replace('capacity', 'ظرفیت');
      case 'mande':
        return val.replace('mande', 'بدهی آب بها');
      case 'arse':
        return val.replace('arse', 'عرصه');
      case 'aian':
        return val.replace('aian', 'اعیان');
    }
  }
  transform(value: string, ...args: unknown[]): string {
    if (!value) return '';
    if (value === '') return '';
    return this.convertedName(value);
  }

}
