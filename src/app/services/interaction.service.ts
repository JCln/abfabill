import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private receiptSource = new Subject<object>();
  receipt$ = this.receiptSource.asObservable();

  setReceipt = (receipt: object) => {
    this.receiptSource.next(receipt);
  }
}
