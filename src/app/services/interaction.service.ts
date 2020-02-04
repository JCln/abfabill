import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private receiptSource = new BehaviorSubject<object>([]);
  receipt$ = this.receiptSource.asObservable();

  setReceipt = (receipt: object) => {
    this.receiptSource.next(receipt);
  }
}
