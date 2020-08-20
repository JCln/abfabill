import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { InteractionService } from 'src/app/services/interaction.service';
import { InterfaceService } from 'src/app/services/interface.service';

import { SpinnerWrapperService } from './../../services/spinner-wrapper.service';
import { CheckRoute } from './../../shared/check-route';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent extends CheckRoute implements OnInit, OnDestroy {
  _hoveredColor: boolean;
  _responseIsNull: boolean = false;
  // bool kardex
  kardex: any;
  ////////

  // usageForChart
  $usage: any[] = [];
  $usageDate: any[] = [];
  ////////

  // subscription
  unSubKardex: Subscription;

  constructor(
    private interfaceService: InterfaceService,
    private spinnerWrapper: SpinnerWrapperService,
    private interactionService: InteractionService,
    private router: Router
  ) {
    super();
  }

  connectToServer = () => {
    this.interfaceService.getKardex(this.getedDataIdFromRoute).subscribe((res: any) => {
      if (res) {
        if (this.isNull(res[0])) {
          this.createSpinner(false);
          this._responseIsNull = true;
          return;
        }
        this.kardex = res;
        res.map(usage => {
          if (usage.isBill) {
            this.$usage.push(usage.usage);
            this.$usageDate.push(usage.oweDate);
            this.interactionService.setChartDate(this.$usage);
            this.interactionService.setChartOweDate(this.$usageDate);

          }
        })
        this.createSpinner(false);
        this.interactionService.setKardex(this.kardex);
      }
    })
  }

  createSpinner = (canLoad: boolean) => {
    canLoad ? this.spinnerWrapper.startLoading() : this.spinnerWrapper.stopLoading()
  }

  ngOnInit(): void {
    this.unSubKardex = this.interactionService.kardex$.subscribe(res => {
      if (this.isNull(res)) {
        this.createSpinner(true);
        this.connectToServer();
      }
      else {
        this.createSpinner(false);
        this.kardex = res;
      }
    })

  }
  changeStyleOnMouseOver = (_hoveredColor: boolean) => {
    this._hoveredColor = _hoveredColor;
  }
  getABillKardex = (id: number, zoneId: number) => {
    this.createSpinner(true);
    this.interfaceService.getABillKardex(id, zoneId).subscribe((res: any) => {
      this.interactionService.setABillKardex(res);
      this.createSpinner(false);
      this.router.navigateByUrl(this.getedDataIdFromRoute + '/bill');
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

  ngOnDestroy() {
    this.unSubKardex.unsubscribe();
  }
}
