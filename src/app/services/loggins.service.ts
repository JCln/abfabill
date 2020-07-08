import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ViewBillService } from './view-bill.service';

@Injectable({
  providedIn: 'root'
})
export class LogginsService {
  private sub = new Subject<boolean>();

  constructor(private interfaceService: ViewBillService) { }

  set isLoaded(value: boolean) {
    this.sub.next(value);
  }
  getIsLoaded(): Observable<any> {
    return this.sub.asObservable();
  }

  // is valid bill id to enter service desk section
  checkValidBillId = (insertedBillId: string) => { // have to be private function
    this.interfaceService.getIsValidId(insertedBillId).subscribe((res: any) => {
      if (res) {
        if (res.errorCode === 200)
          this.sub.next(true);

      } else {
        this.sub.next(false);
      }

    });
  }

  waitForOneSecond(input: string) {
    return new Promise(resolve => {
      const a = this.checkValidBillId(input.toString());
      resolve(a);
    });
  }
  async asyncMethod(input: string) {
    const a = await this.waitForOneSecond(input);
    return a;
  }


}