import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { InteractionService } from 'src/app/services/interaction.service';

import { ViewBillService } from './view-bill.service';

@Injectable({
  providedIn: 'root'
})
export class LogginsService {
  private sub = new Subject<boolean>();

  constructor(private interfaceService: ViewBillService, private interactionService: InteractionService) { }

  set isLoaded(value: boolean) {
    this.sub.next(value);
  }
  getIsLoaded(): Observable<any> {
    return this.sub.asObservable();
  }
  setAllSubjectsToDefault = () => {
    return new Promise(resolve => {
      const a = this.interactionService.setKardex([]);
      const b = this.interactionService.setBillId('');
      const c = this.interactionService.setmetterAnnounce('');
      resolve([a, b, c]);
    })
  }
  setToDefault = async () => {
    await this.setAllSubjectsToDefault().catch(e => console.log(e));
  }

  // is valid bill id to enter service desk section
  private checkValidBillId = (insertedBillId: string) => { // have to be private function
    this.interfaceService.getIsValidId(insertedBillId).subscribe((res: any) => {
      if (res) {
        if (res.errorCode === 200) {
          this.sub.next(true);
          this.setToDefault();
        }
      } else {
        this.sub.next(false);
      }

    });
  }

  private waitForOneSecond(input: string) {
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