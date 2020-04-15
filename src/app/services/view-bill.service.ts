import { Injectable } from '@angular/core';

import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {
  private id: string;
  private base64: string;

  // viewbill: any = [
  //   { message: 'hellow', errorCode: 2 }
  // ];

  constructor(private mainService: MainService) {
  }

  getId = () => {
    return this.id;
  }
  setId = (id: string) => {
    this.id = id;
    this.idValues(this.id);
  }
  setInstallmentId = (id: string) => {
    this.id = id;
  }
  idValues = (id: string) => {
    this.base64 = btoa(id);
  }
  checkValidRoute = (val: object): boolean => {
    if (typeof (Object.values(val)[0]) === "string")
      return false;
    return true;
  }
  getViewBill = (): any => {
    return this.mainService.GET(this.id, 'moshtarakinapi/V2/Bill/Get', this.base64);
  }
  getInstallment = (): any => {
    return this.mainService.GET(this.id, 'moshtarakinapi/Installment/Get');
  }
  setMetterAnnounce = (billId: string, counterclaim: number, notificationMobile?: string): any => {
    const requestOrigin = 6;
    this.idValues(billId.toString());

    const body = {
      billId, counterclaim, notificationMobile, requestOrigin
    }

    return this.mainService.SET(`MoshtarakinApi/v2/bill/generateBill/${this.base64}`, body);
  }
}
