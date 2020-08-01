import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElcService } from 'src/app/services/DI/elc.service';
import { InterfaceService } from 'src/app/services/interface.service';
import { SpinnerWrapperService } from 'src/app/services/spinner-wrapper.service';

import { IElcServies } from '../../interfaces/I-elc-service';
import { ErrorHandlerService } from './../../services/error-handler.service';
import { HelpService } from './../../services/help.service';
import { CheckRoute } from './../../shared/check-route';

@Component({
  selector: 'app-elc-services',
  templateUrl: './elc-services.component.html',
  styleUrls: ['./elc-services.component.scss']
})
export class ElcServicesComponent extends CheckRoute implements OnInit, OnDestroy {
  static elcWarnTime = true;
  elcs: IElcServies[];
  checkedParameter: any;
  // users Inputs
  notificationMobile: string = '';
  _mobileLength: number = 11;
  selectedServices: number[] = [];

  constructor(
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private interfaceService: InterfaceService,
    private spinnerWrapperService: SpinnerWrapperService,
    private helpService: HelpService,
    elcService: ElcService) {
    super();
    this.elcs = elcService.getElc();
  }
  private pushOrPopFromMobileNumber = () => {
    // unshift to array just allowed so => string to array and then to string should converted
    const arrayString = [];
    if (this.notificationMobile.toString().startsWith('09')) {
      return true;
    } else if (this.notificationMobile.toString().startsWith('9')) {
      arrayString.push(0);
      arrayString.push(this.notificationMobile);
      this.notificationMobile = arrayString.join("");
      return true;
    }
    return false;
  }
  mobileValidation = (): boolean => {
    if (!this.pushOrPopFromMobileNumber() || this.notificationMobile.toString().trim() === null || this.notificationMobile.toString().trim().length > this._mobileLength || this.notificationMobile.toString().trim().length < this._mobileLength)
      return false;
    return true;
  }
  protected checkboxChanged = (e: any, d: any) => {
    d.checked = e.target.checked;
  }
  private checkboxStatus = (id: number, bol: boolean) => {
    this.elcs.map(item => {
      if (item.id == id) {
        item.checked = bol;
      }
    })
  }
  private persianCharacters = () => {
    const promise = new Promise((resolve) => {
      this.notificationMobile = this.persianToEngNumbers(this.notificationMobile);
      resolve(this.notificationMobile);
    });
    return promise;
  }
  private isEmptySelected = (): boolean => {
    const a = this.elcs.find((items) => items.checked === true);
    if (a)
      return true;
    return false;
  }
  ngOnInit() {
    this.checkedParameter = this.route.snapshot.queryParamMap.get('checked');
    this.checkboxStatus(this.checkedParameter, true);
  }
  private checkValidation = () => {
    if (!this.isEmptySelected()) {
      this.errorHandler.customToaster(4000, 'لطفا حداقل یکی از خدمات را انتخاب فرمایید');
      return;
    }
    const promise = new Promise((resolve, reject) => {
      if (this.mobileValidation())
        resolve(true);
      else {
        this.errorHandler.customToaster(4000, 'شماره موبایل اشتباه است');
        resolve(false);
      }
    });
    return promise;
  }
  private shapeBodyObject = () => {
    const promise = new Promise((resolve) => {
      resolve({
        billId: this.getedDataIdFromRoute,
        notificationMobile: this.notificationMobile.toString(),
        selectedServices: this.selectedServices,
        requestOrigin: 6
      });
    });
    return promise;
  }
  canSendRequest = () => {
    const selectedServices: number[] = [];
    return new Promise(resolve => {
      this.elcs.map(items => {
        if (items.checked === true)
          selectedServices.push(items.id)
      });
      resolve(this.selectedServices = selectedServices);
    });
  }
  private successFullMessage = (res: string) => {
    this.helpService.customMessage('درخواست ثبت شد', res, '');
    this.helpService.help();
  }
  private connectToServer = (body: any) => {
    return new Promise((resolve, reject) => {
      this.interfaceService.setRegisterAS(body).subscribe((res: any) => {
        if (res) {
          this.successFullMessage(res.message);
          resolve(true);
        }
        else {
          resolve(false);
        }
      });
    });
  }
  classWrapper = async () => {
    await this.persianCharacters();
    const checkValidationVal = await this.checkValidation();
    if (checkValidationVal) {
      this.spinnerWrapperService.startLoading();
      await this.canSendRequest();
      const bodyObject = await this.shapeBodyObject();
      const a = await this.connectToServer(bodyObject);
      if (a || !a) {
        this.spinnerWrapperService.stopLoading();
      }
    }

  }
  ngOnDestroy(): void {
    this.elcs.map(items => items.checked = false);
  }

}
