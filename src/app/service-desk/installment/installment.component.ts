import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { InterfaceService } from 'src/app/services/interface.service';

import { CheckRoute } from './../../shared/check-route';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent extends CheckRoute implements OnInit {
  _spinnerBoolean = true;
  _showMoreButton = false;
  _sumOfInstallments = 0;
  _response: boolean;
  respnseIsNull = true;

  testObject: any = [];
  constructor(
    private viewBillService: InterfaceService
  ) {
    super();
  }

  showMoreButtonClicked = (): void => {
    this._showMoreButton = !this._showMoreButton;
    scroll(0, 1200);
  }
  calcInstallmentAmount = (val: number, event: any): void => {
    if (event.srcElement.checked) {
      this._sumOfInstallments += val;
    } else {
      this._sumOfInstallments -= val;
    }
  }
  insertValToVar = (res: any, callback: () => void) => {
    for (const key in res) {
      // eslint-disable-next-line no-prototype-builtins
      if (res.hasOwnProperty(key)) {
        this.testObject[key] = (res[key]);
      }
    }
    callback();
  }
  removeLoaderAfterResponse = () => this._spinnerBoolean = false;
  connectToServer = () => {
    this.viewBillService.getInstallment(this.getedDataIdFromRoute).subscribe((res: any) => {
      if (res) {
        this._response = true;
        // when response is null and means no installment exists
        if (this.isNull(res[0])) {
          this.respnseIsNull = false;
        }
        this.insertValToVar(res, this.removeLoaderAfterResponse);
      }
    });
  }

  nestingLevel = () => this.connectToServer();

  ngOnInit() {
    this.nestingLevel();

    AOS.init(
      {
        duration: 200,
        easing: 'ease-in-quad'
      }
    );
  }

}
