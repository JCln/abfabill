import { Injectable } from '@angular/core';

import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {
  id: string;
  private base64: string;

  constructor(private mainService: MainService) {
    this.idValues(this.id);
  }

  idValues = (id: string) => {
    this.base64 = btoa(id);
  }

  getViewBill = (): any => {
    return this.mainService.GET(this.id, 'moshtarakinapi/bill/getcorrect', this.base64);
  }
}
