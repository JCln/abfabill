import { Injectable } from '@angular/core';

import { MainService } from './main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {
  private id: number;
  private base64: string;

  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) {
    // this.id = +this.route.snapshot.paramMap.get('id');
    
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.idValues(this.id);
      console.log(this.id);
    });


    // this.idValues('10018315');
    // this.idValues('2249797116314');
    // this.idValues('3374422516318');
    // this.idValues('2242803016314');
  }

  idValues = (id: number) => {
    this.base64 = btoa(id.toString());
  }

  getViewBill = (): any => {
    console.log(this.id);

    return this.mainService.GET(this.id, 'moshtarakinapi/bill/getcorrect', this.base64);
  }
}
