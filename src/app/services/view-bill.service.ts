import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MainService } from './main.service';

const tracks: any[] = [
  { status: 'بارگذاری مدارک', hm: '99:99', dateJalali: "99/99/99" },
  { status: 'تعیین روز بازدید', hm: '99:99', dateJalali: "99/99/99" },
  { status: '4', hm: '99:99', dateJalali: "99/99/99" },
  { status: 'حذف درخواست', hm: '99:99', dateJalali: "99/99/99" }
];
// const tracks = [
//   {
//     status: 'woow',
//     hm: '15:35',
//     dateJalali: '95/11/24'
//   }
// ]
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
  getTrackingRequest = (id: number): any => {
    const idToString = id.toString();
    return of(tracks);
    // return this.mainService.GET(idToString, 'moshtarakinapi/requestManager/getTrackings');
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
  setNewRegister = (billId: string, counterclaim: number, notificationMobile?: string): Observable<any> => {
    const requestOrigin = 6;
    this.idValues(billId.toString());

    const body = {
      billId, counterclaim, notificationMobile, requestOrigin
    }

    return this.mainService.SET(`MoshtarakinApi/v2//${this.base64}`, body);
  }


}
