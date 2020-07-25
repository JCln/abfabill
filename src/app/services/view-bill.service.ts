import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {
  private base64: string;
  constructor(private mainService: MainService) {
  }

  idValues = (id: string) => {
    this.base64 = btoa(id);
  }
  getBase64 = (id: string): string => {
    this.idValues(id);
    return this.base64;
  }
  getIsValidId = (id: string): any => {
    return this.mainService.GET(id, 'moshtarakinapi/member/isvalid');
  }
  getViewBill = (id: string): any => {
    this.idValues(id);
    return this.mainService.GET(id, 'moshtarakinapi/V2/Bill/Get', this.base64);
  }
  getInstallment = (id: string): any => {
    this.idValues(id);
    return this.mainService.GET(id, 'moshtarakinapi/Installment/Get');
  }
  getKardex = (id: string): any => {
    this.idValues(id);
    return this.mainService.GET(id, 'moshtarakinapi/v2/bill/getkardex', this.base64);
  }
  getABillKardex = (id: number, zoneId: number): any => {
    this.idValues(`${id + '' + zoneId}`);
    return this.mainService.GET(`${id}/${zoneId}`, `MoshtarakinApi/V2/Bill/GetThisBill/${this.base64}`);
  }
  getTrackingRequest = (id: string): any => {
    return this.mainService.GET(id, 'moshtarakinapi/requestManager/getTrackings');
  }
  paymentInfoKardex = (id: number, zoneId: number): any => {
    this.idValues(`${id + '' + zoneId}`);
    return this.mainService.GET(`${id}/${zoneId}`, `MoshtarakinApi/V2/Bill/GetThisPayInfo/${this.base64}`);
  }
  getMemberInfo = (id: string): any => {
    this.idValues(id);
    return this.mainService.GET(id, 'moshtarakinapi/v2/member/getinfo', this.base64);
  }
  setMetterAnnounce = (billId: string, counterclaim: number, notificationMobile?: string): Observable<any> => {
    const requestOrigin = 6;
    this.idValues(billId.toString());

    const body = {
      billId, counterclaim, notificationMobile, requestOrigin
    }

    return this.mainService.SET(`MoshtarakinApi/v2/bill/generateBill/${this.base64}`, body);
  }
  setNewRegister = (form: object): Observable<any> => {
    return this.mainService.SET('MoshtarakinApi/requestManager/registerNew', form);
  }
  setUpdateMobile = (body: object): Observable<any> => {
    return this.mainService.SET('MoshtarakinApi/v2/member/updateMobile', body);
  }

}
