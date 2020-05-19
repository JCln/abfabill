import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IViewBill } from './iview-bill';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {
  private id: string;
  private base64: string;
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
  getKardex = (id: string): any => {
    this.idValues(id);
    return this.mainService.GET(id, 'moshtarakinapi/v2/bill/getkardex', this.base64);
  }
  getABillKardex = (id: number, zoneId: number): any => {
    this.idValues(`${id + '' + zoneId}`);
    return this.mainService.GET(`${id}/${zoneId}`, `MoshtarakinApi/V2/Bill/GetThisBill/${this.base64}`);
  }
  paymentInfoKardex = (id: number, zoneId: number): any => {
    this.idValues(`${id + '' + zoneId}`);
    return this.mainService.GET(`${id}/${zoneId}`, `MoshtarakinApi/V2/Bill/GetThisPayInfo/${this.base64}`);
  }
  getMemberInfo = (id: string): any => {
    this.idValues(id);
    return this.mainService.GET(id, 'moshtarakinapi/v2/member/getinfo', this.base64);
  }
  setMetterAnnounce = (billId: string, counterclaim: number, notificationMobile?: string): Observable<IViewBill> => {
    const requestOrigin = 6;
    this.idValues(billId.toString());

    const body = {
      billId, counterclaim, notificationMobile, requestOrigin
    }

    return this.mainService.SET(`MoshtarakinApi/v2/bill/generateBill/${this.base64}`, body);
  }


}
