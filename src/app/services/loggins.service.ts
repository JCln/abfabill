import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { InteractionService } from 'src/app/services/interaction.service';
import { InterfaceService } from 'src/app/services/interface.service';


@Injectable({
  providedIn: 'root'
})
export class LogginsService {
  private sub = new Subject<boolean>();

  constructor(private interfaceService: InterfaceService, private interactionService: InteractionService) { }

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
  checkValidation = (insertedBillId: string) => { // have to be private function
    this.setToDefault();

    return new Promise((resolve, reject) => {
      this.interfaceService.getIsValidId(insertedBillId).subscribe((res: any) => {
        if (res) {
          if (res.errorCode === 200) {
            this.sub.next(true);
            return resolve(true);
          }
        }
      });
      this.sub.next(false);
      resolve(false);
    });

  }

}