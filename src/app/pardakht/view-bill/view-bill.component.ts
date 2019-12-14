import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IViewBill } from './../../services/iview-bill';
import { ViewBillService } from './../../services/view-bill.service';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent implements OnInit {
  viewBill: Observable<IViewBill[]>;

  constructor(private viewBillService: ViewBillService) { }

  ngOnInit() {
    this.viewBill = this.viewBillService.getViewBill();
  }

}
