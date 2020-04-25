import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InteractionService } from 'src/app/services/interaction.service';

import { ErrorHandlerService } from './../../services/error-handler.service';
import { SpinnerWrapperService } from './../../services/spinner-wrapper.service';
import { ViewBillService } from './../../services/view-bill.service';

const mobileLength = 11;
@Component({
  selector: 'app-metter-announce',
  templateUrl: './metter-announce.component.html',
  styleUrls: ['./metter-announce.component.scss']
})
export class MetterAnnounceComponent implements OnInit, OnDestroy {
  input: number;
  getedDataIdFromRoute = '';
  mobileNumber = '';
  // spinner
  spinnerSubscriber: Subscription;
  connectToSrSubscriber: Subscription;
  testSpinner: boolean = false;
  // need to have error text to show
  notification: boolean = false;
  // notificationText = '';

  // textError from server
  $textError: string;
  showMessage = false;
  // button
  clickableButton: boolean = true;

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

  checkValidInput = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {

      if (isNaN(this.input) || this.input === null || this.input.toString().length > this.maxLength || this.input.toString().length < this.minLength) {
        this.errorHandler.customToaster(4000, 'شماره کنتور اشتباه است');
        reject(false);
      }
      if (!this.pushOrPopFromMobileNumber() || this.mobileNumber.toString().trim() === null || this.mobileNumber.toString().trim().length > this.mobileLength || this.mobileNumber.toString().trim().length < this.mobileLength) {
        this.errorHandler.customToaster(4000, 'شماره موبایل اشتباه است');
        reject(false);
      }
      resolve(true);
    })

  }

  @HostListener('document: keyup', ['$event'])
  onkeyUpHandler(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      this.nestingLevel();
    }
  }

  connectToServer = (): Promise<any> => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(
          this.connectToSrSubscriber = this.viewBillService.setMetterAnnounce(this.getedDataIdFromRoute, this.input, this.mobileNumber).subscribe((res: any) => {
            if (res) {
              this.errorHandler.toasterError('قبض آب بها برای شما پیامک خواهد شد', 'با تشکر از اعلام شماره کنتور خود');
              this.errorHandler.timeOutBeforeRoute('r/success');
            }
          })
        )
      }, 3000)
    )
  }

  createSpinner = (val: any) => {
    this.spinnerSubscriber = this.spinnerWrapper.loadingStatus$.subscribe(status => {
      this.clickableButton = status;
      this.notification = status;
    })
  }

  spinnerChecker = (bol: boolean): Promise<any> => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(this.spinnerWrapper.loading(bol))
      }, 100)
    )
  }
  changeToDefaultBeforeResponse = () => {
    this.interactionService.setmetterAnnounce('');
    this.spinnerChecker(true);
  }

  ngAfterContentChecked(): void {
    this.interactionService.metterAnnounceErrorText$.subscribe(res => {
      if (res) {
        this.$textError = res;
        this.showMessage = true;
        this.testSpinner = true;
        if (this.$textError)
          this.spinnerChecker(false);
      }
    });
  }


  nestingLevel = async () => {
    this.changeToDefaultBeforeResponse();
    const a = await this.checkValidInput();
    const b = await this.spinnerChecker(a);
    this.createSpinner(b);
    await this.connectToServer().catch(err => console.log(err));
    // if (this.testSpinner) {
    //   await this.spinnerChecker(false);
    // }
  }

  constructor(
    private errorHandler: ErrorHandlerService,
    private viewBillService: ViewBillService,
    private interactionService: InteractionService,
    private spinnerWrapper: SpinnerWrapperService,
  ) {
    this.getDataFromRoute();
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    // this.connectToSrSubscriber.unsubscribe();
    // this.spinnerSubscriber.unsubscribe();
  }
}