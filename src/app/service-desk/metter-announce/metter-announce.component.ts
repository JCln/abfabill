import { Component, HostListener, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

import { ErrorHandlerService } from './../../services/error-handler.service';
import { IViewBill } from './../../services/iview-bill';
import { SpinnerWrapperService } from './../../services/spinner-wrapper.service';
import { ViewBillService } from './../../services/view-bill.service';
import { CheckRoute } from './../../shared/check-route';

const mobileLength = 11;
@Component({
  selector: 'app-metter-announce',
  templateUrl: './metter-announce.component.html',
  styleUrls: ['./metter-announce.component.scss']
})
export class MetterAnnounceComponent extends CheckRoute implements OnInit {
  kontorNumber: number;
  mobileNumber = '';
  notification: boolean = false;
  // textError from server
  $textError: string;
  showMessage = false;
  // button
  clickableButton: boolean = true;

  private maxLength = 5;
  private minLength = 1;

  private mobileLength = mobileLength;

  private persianCharacters = () => {
    const promise = new Promise((resolve) => {
      this.kontorNumber = this.persianToEngNumbers(this.kontorNumber);
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
  private validInput1 = (): boolean => {
    if (!this.numbersValidation(this.kontorNumber)) {
      this.errorHandler.customToaster(5000, 'شماره کنتور اشتباه است');
      return false;
    }
    if (this.kontorNumber === null || this.kontorNumber.toString().length > this.maxLength || this.kontorNumber.toString().length < this.minLength) {
      this.errorHandler.customToaster(4000, 'شماره کنتور اشتباه است');
      return false;
    }
    return true;
  }
  private validInput2 = (): boolean => {
    if (!this.numbersValidation(this.mobileNumber)) {
      this.errorHandler.customToaster(5000, 'شماره موبایل اشتباه است');
      return false;
    }
    if (!this.pushOrPopFromMobileNumber() || this.mobileNumber.toString().trim() === null || this.mobileNumber.toString().trim().length > this.mobileLength || this.mobileNumber.toString().trim().length < this.mobileLength) {
      this.errorHandler.customToaster(4000, 'شماره موبایل اشتباه است');
      return false;
    }
    return true;
  }

  private checkValidInput = (): boolean => {
    if (this.validInput1() && this.validInput2())
      return true;
    return false;
  }

  @HostListener('document: keyup', ['$event'])
  onkeyUpHandler(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      this.nestingLevel();
    }
  }

  private connectToServer = (): Promise<any> => {
    return new Promise(resolve =>
      resolve(
        this.viewBillService.setMetterAnnounce(this.getedDataIdFromRoute, this.kontorNumber, this.mobileNumber)
          .subscribe((res: IViewBill) => {
            if (res) {
              this.errorHandler.toasterError('قبض آب بها برای شما پیامک خواهد شد', 'با تشکر از اعلام شماره کنتور خود');
              this.errorHandler.timeOutBeforeRoute('r/success');
            }
          })

      )
    )
  }

  private spinnerCondition = (val: any) => {
    this.spinnerWrapper.loadingStatus$.subscribe(status => {
      this.clickableButton = status;
      this.notification = status;
    })
  }

  private createSpinner = (canLoad: boolean) => {
    canLoad ? this.spinnerWrapper.startLoading() : this.spinnerWrapper.stopLoading()
  }

  private spinnerChecker = (bol: boolean): Promise<any> => {
    return new Promise(resolve =>
      resolve(this.createSpinner(bol))
    )
  }
  private changeToDefaultBeforeResponse = () => {
    this.interactionService.setmetterAnnounce('');
    this.spinnerChecker(true);
  }

  nestingLevel = async () => {
    await this.persianCharacters();
    this.changeToDefaultBeforeResponse();
    const a = this.checkValidInput();
    console.log(a);

    const b = await this.spinnerChecker(a);
    this.spinnerCondition(a);
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
}