import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ErrorHandlerService } from './../../services/error-handler.service';
import { ViewBillService } from './../../services/view-bill.service';

const mobileLength = 11;
@Component({
  selector: 'app-metter-announce',
  templateUrl: './metter-announce.component.html',
  styleUrls: ['./metter-announce.component.scss']
})
export class MetterAnnounceComponent implements OnInit {
  input: number;
  getedDataIdFromRoute = '';
  mobileNumber = '';
  // spinner
  spinnerBoolean = true;
  // need to have error text to show
  errorResponse: boolean;
  errorResponseText = '';

  private allowDataSendToServer = false;

  private maxLength = 5;
  private minLength = 1;

  private mobileLength = mobileLength;

  getDataFromRoute = () => {
    this.getedDataIdFromRoute = window.location.pathname.split('/')[2]; // 1 is 2 in server
  }

  pushOrPopFromMobileNumber = () => {
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

  checkValidInput = () => {
    if (isNaN(this.input) || this.input === null || this.input.toString().length > this.maxLength || this.input.toString().length < this.minLength) {
      this.errorHandler.customToaster(4000, 'شماره کنتور خود را اشتباه وارد کرده اید');
      return;
    }
    if (!this.pushOrPopFromMobileNumber() || this.mobileNumber.toString().trim() === null || this.mobileNumber.toString().trim().length > this.mobileLength || this.mobileNumber.toString().trim().length < this.mobileLength) {
      this.errorHandler.customToaster(4000, 'شماره موبایل اشتباه است');
      return;
    }
    this.errorResponse = true;
    this.allowDataSendToServer = true;
    this.nestingLevel();
  }

  @HostListener('document: keyup', ['$event'])
  onkeyUpHandler(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      this.checkValidInput();
    }
  }
  connectToServer = () => {
    this.viewBillService.setMetterAnnounce(this.getedDataIdFromRoute, this.input, this.mobileNumber).subscribe((res: any) => {
      this.errorResponse = false;
      console.log(res);
      if (res) {
        // looking for async pipe make ups
        // this.$asyncPipeTest = res;

        // this.response = true;
        console.log(res);
        this.errorResponse = false;
        this.errorHandler.customToaster(10000, '', 'عملیات با موفقیت انجام شد');
        this.router.navigate([/p/ + `${this.getedDataIdFromRoute}` + '/bill']); // should /p/ + for server


        // when response is null and means no installment exists
        // if (this.isNull(res[0])) {
        //   this.respnseIsNull = false;
        // }
        // this.insertValToVar(res, this.removeLoaderAfterResponse);
      } else {
        this.errorResponse = false;
      }
    });
  }


  constructor(private errorHandler: ErrorHandlerService, private route: ActivatedRoute, private viewBillService: ViewBillService, private router: Router) { }

  nestingLevel = async () => {
    if (this.allowDataSendToServer) {
      this.connectToServer();
    }
  }
  ngOnInit(): void {
    this.getDataFromRoute();
  }

}
