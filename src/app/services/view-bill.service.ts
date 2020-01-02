import { Injectable } from '@angular/core';
import { Observable, of, observable, pipe } from 'rxjs';

import { IViewBill } from './iview-bill';
import { MainService } from './main.service';
import { ActivatedRoute } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {
  constructor(private mainService: MainService, private route: ActivatedRoute, private http: HttpClient) {
    // const id = this.route.snapshot.paramMap.get('id');

  }
  viewBill: any;
  id = '10018315';
  base64 = btoa('10018315');

  getViewBill = (): any => {
    console.log(this.id);
    return this.mainService.GET(this.id, 'moshtarakinapi/bill/getcorrect', this.base64);
  }
 
  getTestBillTest = () => {
    console.log(this.id);

    return this.http.get('http://37.191.92.130/moshtarakinapi/bill/getcorrecttest/' + this.id);

    // this.viewBill = this.http.get('http://37.191.92.130/moshtarakinapi/bill/getcorrecttest/')
    // return of(this.viewBill);
  }

}
