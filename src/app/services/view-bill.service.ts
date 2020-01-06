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

  // 2242803016314
  setId = (id: string) => {
    this.id = id;
    this.idValues(this.id);
  }

  idValues = (id: string) => {
    this.base64 = btoa(id);
  }

  getViewBill = (): any => {
    return this.mainService.GET(this.id, 'moshtarakinapi/bill/getcorrect', this.base64);
  }
}
