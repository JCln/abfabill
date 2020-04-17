import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private billId = new BehaviorSubject<string>('');
  billId$ = this.billId.asObservable();

  private receiptSource = new BehaviorSubject<object>([]);
  receipt$ = this.receiptSource.asObservable();

  private installmentIdSource = new BehaviorSubject<string>('');
  installmentId$ = this.installmentIdSource.asObservable();

  private metterAnnounceErrorTextSource = new BehaviorSubject<string>('');
  metterAnnounceErrorText$ = this.metterAnnounceErrorTextSource.asObservable();

  setReceipt = (receipt: object) => this.receiptSource.next(receipt);

  setInstallment = (id: string) => this.installmentIdSource.next(id);

  setmetterAnnounce = (text: string) => this.metterAnnounceErrorTextSource.next(text);

  setBillId = (billId: string) => this.billId.next(billId);
}
