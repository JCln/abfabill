import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { SpinnerWrapperService } from './../../services/spinner-wrapper.service';
import { CheckRoute } from './../../shared/check-route';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.scss']
})
export class UpdateMobileComponent extends CheckRoute implements OnInit {
  mobileNumber: string = '';
  mobileLength: number = 11;

  constructor(
    private errorHandler: ErrorHandlerService,
    private interfaceService: ViewBillService,
    private spinnerWrapperService: SpinnerWrapperService
  ) {
    super();
  }

  ngOnInit(): void {
  }
  private persianCharacters = () => {
    const promise = new Promise((resolve) => {
      this.mobileNumber = this.persianToEngNumbers(this.mobileNumber);
      resolve(this.mobileNumber);
    });
    return promise;
  }
  private pushOrPopFromMobileNumber = () => {
    // unshift to array just allowed so => string to array and then to string should converted
    const arrayString = [];
    if (this.mobileNumber.toString().startsWith('09')) {
      return true;
    } else if (this.mobileNumber.toString().startsWith('9')) {
      arrayString.push(0);
      arrayString.push(this.mobileNumber);
      this.mobileNumber = arrayString.join("");
      return true;
    }
    return false;
  }
  mobileValidation = (): boolean => {
    if (!this.pushOrPopFromMobileNumber() || this.mobileNumber.toString().trim() === null || this.mobileNumber.toString().trim().length > this.mobileLength || this.mobileNumber.toString().trim().length < this.mobileLength) {
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
        "mobile": this.mobileNumber,
        "origin": 6,
        "billId": this.getedDataIdFromRoute
      });
    });
    return promise;
  }
  private createSpinner = (canLoad: boolean) => {
    canLoad ? this.spinnerWrapperService.startLoading() : this.spinnerWrapperService.stopLoading()
  }
  private spinnerChecker = (bol: boolean): Promise<any> => {
    return new Promise(resolve =>
      resolve(this.createSpinner(bol))
    )
  }
  private connectToServer = (body: any) => {
    return new Promise((resolve, reject) => {
      this.interfaceService.setUpdateMobile(body).subscribe((res: Observable<any>) => {
        console.log(res);
        resolve(res);
      });
      reject(false);
    });
  }
  classWrapper = async () => {
    await this.persianCharacters();
    const checkValidationVal = await this.checkValidation();
    if (checkValidationVal) {
      this.spinnerChecker(true);// should test for ok
      const bodyObject = await this.shapeBodyObject();
      const w = await this.connectToServer(bodyObject);
      if (w) {
        this.spinnerChecker(false);
      }
      // console.log(Object.values(w).length-1); happyyyyyyyy

    }
  }



}
