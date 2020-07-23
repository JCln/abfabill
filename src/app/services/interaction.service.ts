import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }
  // -------
  private chartData = new BehaviorSubject<string[]>([]);
  chartData$ = this.chartData.asObservable();

  private chartOweDate = new BehaviorSubject<string[]>([]);
  chartOweData$ = this.chartOweDate.asObservable();

  private kardex = new BehaviorSubject<string[]>([]);
  kardex$ = this.kardex.asObservable();

  // -------

  private abillKardexInfo = new BehaviorSubject<any>([]);
  abillKardex$ = this.abillKardexInfo.asObservable();

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

  setChartDate = (chartData: string[]) => {
    this.chartData.next(chartData);
  }
  setChartOweDate = (chartData: string[]) => {
    this.chartOweDate.next(chartData);
  }
  setABillKardex = (aBillKardexInfo: any) => {
    this.abillKardexInfo.next(aBillKardexInfo);
  }
  setKardex = (kardex: string[]) => {
    this.kardex.next(kardex);
  }
}
