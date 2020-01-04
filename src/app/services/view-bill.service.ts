import { Injectable } from '@angular/core';

import { MainService } from './main.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {
  private id: string;
  private base64: string;
  constructor(private mainService: MainService, private route: ActivatedRoute) {
    const billId = this.route.snapshot.paramMap.get('id');
    // this.idValues(billId);
    // this.idValues('10018315');
    // this.idValues('2249797116314');
    this.idValues('3374422516318');
    // this.idValues('2242803016314');
  }

  idValues = (id: string) => {
    this.id = id;
    this.base64 = btoa(id);
  }

  getViewBill = (): any => {
    console.log(this.base64);
    return this.mainService.GET(this.id, 'moshtarakinapi/bill/getcorrect', this.base64);
  }
}
