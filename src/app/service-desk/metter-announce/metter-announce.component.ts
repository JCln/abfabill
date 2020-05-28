import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InteractionService } from 'src/app/services/interaction.service';

import { ErrorHandlerService } from './../../services/error-handler.service';
import { SpinnerWrapperService } from './../../services/spinner-wrapper.service';
import { ViewBillService } from './../../services/view-bill.service';
import { CheckRoute } from './../../shared/check-route';

const mobileLength = 11;
@Component({
  selector: 'app-metter-announce',
  templateUrl: './metter-announce.component.html',
  styleUrls: ['./metter-announce.component.scss']
})
export class MetterAnnounceComponent extends CheckRoute implements OnInit, OnDestroy {
  input: number;
  mobileNumber = '';
  // spinner
  spinnerSubscriber: Subscription;
  connectToSrSubscriber: Subscription;
  // need to have error text to show
  notification: boolean = false;
  testTheFuckingThat = false;
  // notificationText = '';

  // textError from server
  $textError: string;
  showMessage = false;
  // button
  clickableButton: boolean = true;

  private maxLength = 5;
  private minLength = 1;

  private mobileLength = mobileLength;

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
  validInput1 = (): boolean => {
    if (isNaN(this.input) || this.input === null || this.input.toString().length > this.maxLength || this.input.toString().length < this.minLength) {
      this.errorHandler.customToaster(4000, 'شماره کنتور اشتباه است');
      return false;
    }
    return true;
  }
  validInput2 = (): boolean => {
    if (!this.pushOrPopFromMobileNumber() || this.mobileNumber.toString().trim() === null || this.mobileNumber.toString().trim().length > this.mobileLength || this.mobileNumber.toString().trim().length < this.mobileLength) {
      this.errorHandler.customToaster(4000, 'شماره موبایل اشتباه است');
      return false;
    }
    return true;
  }

  checkValidInput = (): boolean => {
    if (this.validInput1() && this.validInput2()) {
      return true;
    } else {
      return false
    }
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

  nestingLevel = async () => {
    this.changeToDefaultBeforeResponse();
    const a = this.checkValidInput();
    console.log(a);

    const b = await this.spinnerChecker(a);
    this.createSpinner(a);
    if (a)
      await this.connectToServer().catch(err => console.log(err));
  }

  constructor(
    private errorHandler: ErrorHandlerService,
    private viewBillService: ViewBillService,
    private interactionService: InteractionService,
    private spinnerWrapper: SpinnerWrapperService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.interactionService.metterAnnounceErrorText$.subscribe(res => {
      if (res) {
        this.$textError = res;
        this.showMessage = true;
        if (this.$textError)
          this.spinnerChecker(false);
      }
    });
  }
  ngOnDestroy(): void {
    // this.connectToSrSubscriber.unsubscribe();
    // this.spinnerSubscriber.unsubscribe();
  }
}