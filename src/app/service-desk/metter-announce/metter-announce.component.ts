import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';

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
  // spinnerBoolean = true;
  // need to have error text to show
  notification: boolean;
  // notificationText = '';

  // textError from server
  $textError: string;
  showMessage = false;
  // button
  clickableButton: boolean = true;

  private allowDataSendToServer = false;

  private maxLength = 5;
  private minLength = 1;

  private mobileLength = mobileLength;

  getDataFromRoute = () => {
    this.interactionService.billId$.subscribe(res => this.getedDataIdFromRoute = res);
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
    // second or more try should hide message
    this.showMessage = false;
    this.$textError = '';

    if (isNaN(this.input) || this.input === null || this.input.toString().length > this.maxLength || this.input.toString().length < this.minLength) {
      this.errorHandler.customToaster(4000, 'شماره کنتور خود را اشتباه وارد کرده اید');
      return;
    }
    if (!this.pushOrPopFromMobileNumber() || this.mobileNumber.toString().trim() === null || this.mobileNumber.toString().trim().length > this.mobileLength || this.mobileNumber.toString().trim().length < this.mobileLength) {
      this.errorHandler.customToaster(4000, 'شماره موبایل اشتباه است');
      return;
    }
    this.clickableButton = false;
    this.notification = true;
    this.allowDataSendToServer = true;
    this.nestingLevel();
  }

  @HostListener('document: keyup', ['$event'])
  onkeyUpHandler(event: KeyboardEvent) {
    if (this.clickableButton) {

      if (event.key === 'Enter' || event.key === 'NumpadEnter') {
        this.checkValidInput();
      }
    }
  }
  connectToServer = () => {
    this.viewBillService.setMetterAnnounce(this.getedDataIdFromRoute, this.input, this.mobileNumber).subscribe((res: any) => {
      if (res) {
        this.errorHandler.toasterError('قبض آب بها برای شما پیامک خواهد شد', 'با تشکر از اعلام شماره کنتور خود');
        this.errorHandler.timeOutBeforeRoute('r/success');
      }
      this.notification = false;
      this.clickableButton = true;
    });
  }

  ngAfterContentChecked(): void {
    this.interactionService.metterAnnounceErrorText$.subscribe(res => {
      if (res) {
        this.$textError = res;
        this.showMessage = true;
        this.notification = false;
        this.clickableButton = true;
      }
    });
  }

  constructor(
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private viewBillService: ViewBillService,
    private router: Router,
    private interactionService: InteractionService
  ) { }

  nestingLevel = () => {
    if (this.allowDataSendToServer) {
      this.allowDataSendToServer = false;
      this.connectToServer();
    }
  }
  ngOnInit(): void {
    this.getDataFromRoute();
    // hidden showMessage for last changes and user enters
    // this.showMessage = false;
  }

}
