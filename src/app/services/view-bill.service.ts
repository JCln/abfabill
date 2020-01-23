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

  idValues = (id: string) => {
    this.base64 = btoa(id);
  }

  checkValidRoute = (val: string): boolean => {
    if (val === 'pageNotFound' || val === undefined || val === null || Object.values(val)[0]) {
      return false;
    }
    return true;
  }
  getViewBill = (): any => {
    return this.mainService.GET(this.id, 'moshtarakinapi/bill/getcorrect', this.base64);
  }
}
