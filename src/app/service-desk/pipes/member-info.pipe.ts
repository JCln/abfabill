import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberInfo'
})
export class MemberInfoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
