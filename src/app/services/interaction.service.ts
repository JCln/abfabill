import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private receiptSource = new BehaviorSubject<object>([]);
  receipt$ = this.receiptSource.asObservable();

  private installmentIdSource = new BehaviorSubject<string>('');
  installmentId$ = this.installmentIdSource.asObservable();

  setReceipt = (receipt: object) => {
    this.receiptSource.next(receipt);
  }
  setInstallment = (id: string) => {
    this.installmentIdSource.next(id);
  }
}
