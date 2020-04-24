import { Component, OnInit } from '@angular/core';
import { ViewBillService } from 'src/app/services/view-bill.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {
  // bool kardex
  kardex: any;
  isKardex: boolean = false;
  ////////
  billId: string;

  constructor(private interfaceService: ViewBillService) {
    this.getDataFromRoute();
  }
  getDataFromRoute = () => {
    this.billId = window.location.pathname.split('/')[1];
  }
  connectToServer = () => {
    this.interfaceService.getKardex(this.billId).subscribe((res: any) => {
      if (res) {
        this.kardex = res;
        this.isKardex = true;
      }
    })
  }

  ngOnInit(): void {
    this.connectToServer();
  }
  getIconIfIsBill = () => {
    if (this.kardex.isBill === false) {
      return 'fa fa-check'
    } else {
      return '';
    }
  }

}
