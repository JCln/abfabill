import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { SpinnerWrapperService } from './../../services/spinner-wrapper.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {
  hoveredColor: boolean;
  billId: string;
  // bool kardex
  kardex: any;
  ////////
  // usageForChart
  usage: any[] = [];
  usageDate: any[] = [];
  // spinner
  spinnerBoolean: boolean = false;
  spinnerTest: boolean = false;

  constructor(
    private interfaceService: ViewBillService,
    private spinnerWrapper: SpinnerWrapperService,
    private interationService: InteractionService
  ) {
    this.getDataFromRoute();
    this.createSpinner();
  }
  getDataFromRoute = () => {
    this.billId = window.location.pathname.split('/')[1];
  }
  connectToServer = () => {
    this.interfaceService.getKardex(this.billId).subscribe((res: any) => {
      if (res) {
        this.kardex = res;
        res.map(usage => {
          if (usage.isBill) {
            this.usage.push(usage.usage);
            this.usageDate.push(usage.oweDate);
            this.interationService.setChartDate(this.usage);
            this.interationService.setChartOweDate(this.usageDate);

          }
        })
        this.spinnerWrapper.loading(false);
      }
    })
  }

  createSpinner = () => {
    this.spinnerWrapper.loading(true);
  }

  ngOnInit(): void {
    this.connectToServer();
  }
  changeStyleOnMouseOver = (hoveredColor: boolean) => {
    this.hoveredColor = hoveredColor;
  }
  getABillKardex = (id: number, zoneId: number) => {
    this.interfaceService.getABillKardex(id, zoneId).subscribe((res: any) => {
      this.interationService.setABillKardex(res);
    });
  }
  getPaymentInfoKardex = (id: number, zoneId: number, index: number) => {
    this.smallSpinnerLoader(true);
    this.spinnerTest = true;
    this.interfaceService.paymentInfoKardex(id, zoneId).subscribe((res: any) => {
      this.kardex[index].payDay = res.payDay;
      this.kardex[index].payTypeTitle = res.payTypeTitle;
      this.smallSpinnerLoader(false);
    });
  }

  smallSpinnerLoader = (bol: boolean) => this.spinnerBoolean = bol;
}
