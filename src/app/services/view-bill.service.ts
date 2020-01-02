import { Injectable } from '@angular/core';

import { MainService } from './main.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {
  private id: string;
  private base64: string;
  constructor(private mainService: MainService, private route: ActivatedRoute, private http: HttpClient) {
    const billId = this.route.snapshot.paramMap.get('id');
    this.idValues(billId);
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
