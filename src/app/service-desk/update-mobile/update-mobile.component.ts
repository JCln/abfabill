import { Component } from '@angular/core';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

import { HelpService } from './../../services/help.service';
import { InterfaceService } from './../../services/interface.service';
import { SpinnerWrapperService } from './../../services/spinner-wrapper.service';
import { CheckRoute } from './../../shared/check-route';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.scss']
})
export class UpdateMobileComponent extends CheckRoute {
  _mobileNumber: string = '';
  _mobileLength: number = 11;

  constructor(
    private errorHandler: ErrorHandlerService,
    private interfaceService: InterfaceService,
    private spinnerWrapperService: SpinnerWrapperService,
    private helpService: HelpService
  ) {
    super();
  }
  private persianCharacters = () => {
    const promise = new Promise((resolve) => {
      this._mobileNumber = this.persianToEngNumbers(this._mobileNumber);
      resolve(this._mobileNumber);
    });
    return promise;
  }
  private pushOrPopFromMobileNumber = () => {
    // unshift to array just allowed so => string to array and then to string should converted
    const arrayString = [];
    if (this._mobileNumber.toString().startsWith('09')) {
      return true;
    } else if (this._mobileNumber.toString().startsWith('9')) {
      arrayString.push(0);
      arrayString.push(this._mobileNumber);
      this._mobileNumber = arrayString.join("");
      return true;
    }
    return false;
  }
  mobileValidation = (): boolean => {
    if (!this.pushOrPopFromMobileNumber() || this._mobileNumber.toString().trim() === null || this._mobileNumber.toString().trim().length > this._mobileLength || this._mobileNumber.toString().trim().length < this._mobileLength) {
      this.errorHandler.customToaster(4000, 'شماره موبایل اشتباه است');
      return false;
    }
    return true;
  }
  private checkValidation = () => {
    const promise = new Promise((resolve, reject) => {
      if (this.mobileValidation())
        resolve(true)
      resolve(false);
    });
    return promise;
  }
  private shapeBodyObject = () => {
    const promise = new Promise((resolve) => {
      resolve({
        "mobile": this._mobileNumber,
        "origin": 6,
        "billId": this.getedDataIdFromRoute,
        "api": this.interfaceService.getBase64(this.getedDataIdFromRoute)
      });
    });
    return promise;
  }
  private createSpinner = (canLoad: boolean) => {
    canLoad ? this.spinnerWrapperService.startLoading() : this.spinnerWrapperService.stopLoading()
  }
  private spinnerChecker = (bol: boolean): Promise<any> => {
    return new Promise(resolve => {
      this.createSpinner(bol);
      resolve();
    })
  }
  private successFullMessage = (res: string) => {
    this.helpService.customMessage('', res, '');
    this.helpService.help();
  }
  private connectToServer = (body: any) => {
    return new Promise((resolve, reject) => {
      this.interfaceService.setUpdateMobile(body).subscribe((res: any) => {
        if (res) {
          this.spinnerChecker(false);
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
      this.spinnerChecker(true);
      const bodyObject = await this.shapeBodyObject();
      const a = await this.connectToServer(bodyObject)
        .then(res => {
          console.log(res); console.log(a);
        })
        .catch(res => this.spinnerChecker(false));
    }
  }

}
