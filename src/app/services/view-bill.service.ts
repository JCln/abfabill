import { Injectable } from '@angular/core';

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
    //  myVar instanceof String
    //   console.log(typeof (Object.values(val)));
    if (typeof (Object.values(val)[0]) === "string") {
      console.log(typeof (Object.values(val)[0]) === "string");

      return false;
    }
    return true;
  }
  getViewBill = (): any => {
    return this.mainService.GET(this.id, 'moshtarakinapi/bill/getcorrect', this.base64);
  }
  getInstallment = (): any => {
    return this.mainService.GET(this.id, 'moshtarakinapi/Installment/Get');
  }
}
