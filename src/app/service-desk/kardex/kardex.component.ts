import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  spinnerParameters: any;

  constructor(
    private interfaceService: ViewBillService,
    private spinnerWrapper: SpinnerWrapperService,
    private interactionService: InteractionService,
    private router: Router
  ) {
    this.getDataFromRoute();
    this.createSpinner(true);
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
            this.interactionService.setChartDate(this.usage);
            this.interactionService.setChartOweDate(this.usageDate);

          }
        })
        this.createSpinner(false);
      }
    })
  }

  createSpinner = (canLoad: boolean) => {
    this.spinnerWrapper.loading(canLoad);
  }

  ngOnInit(): void {
    this.connectToServer();
  }
  changeStyleOnMouseOver = (hoveredColor: boolean) => {
    this.hoveredColor = hoveredColor;
  }
  getABillKardex = (id: number, zoneId: number) => {
    this.createSpinner(true);
    this.interfaceService.getABillKardex(id, zoneId).subscribe((res: any) => {
      this.interactionService.setABillKardex(res);
      this.createSpinner(false);
      this.router.navigateByUrl(this.billId + '/bill');
    });
  }
  getPaymentInfoKardex = (id: number, zoneId: number, index: number) => {
    this.smallSpinnerLoader(index, true);
    this.interfaceService.paymentInfoKardex(id, zoneId).subscribe((res: any) => {
      this.kardex[index].payDay = res.payDay;
      this.kardex[index].bankTitle = res.bankTitle;
      this.kardex[index].payableReadable = res.payableReadable;
      this.kardex[index].payTypeTitle = res.payTypeTitle;
      this.smallSpinnerLoader(index, false);
    });
  }

  smallSpinnerLoader = (index: number, bol: boolean) => this.kardex[index].spinner = bol;
}
