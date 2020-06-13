import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { SpinnerWrapperService } from 'src/app/services/spinner-wrapper.service';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { CheckRoute } from './../../shared/check-route';

const mobileLength = 11;
@Component({
  selector: 'app-register-new',
  templateUrl: './register-new.component.html',
  styleUrls: ['./register-new.component.scss']
})
export class RegisterNewComponent extends CheckRoute implements OnInit {
  input: number;
  mobileNumber = '';
  // spinner
  notification: boolean = false;
  // notificationText = '';

  // textError from server
  $textError: string;
  showMessage = false;
  // button

  private maxLength = 5;
  private minLength = 1;

  clickableButton: boolean = true;
  private mobileLength = mobileLength;

  constructor(
    private errorHandler: ErrorHandlerService,
    private viewBillService: ViewBillService,
    private interactionService: InteractionService,
    private spinnerWrapper: SpinnerWrapperService,
    private fb: FormBuilder
  ) {
    super();
  }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    sureName: ['', Validators.required],
    nationalId: ['', [Validators.required, Validators.pattern("^[0-9]*$"),
    Validators.minLength(10), Validators.maxLength(11)]],
    phoneNumber: ['', [Validators.pattern("^[0-9]*$"),
    Validators.minLength(8), Validators.maxLength(11)]],
    fatherName: [''],
    mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("^[0-9]*$")]],//, forbiddenNameValidator(/bob/i)   
    selectedServices: ['', Validators.required],
    neighbourBillId: ['', [Validators.required, Validators.pattern("^[0-9]*$"),
    Validators.maxLength(13)]],
    address: ['', Validators.required],
    postalCode: ['', [Validators.pattern("^[0-9]*$"),
    Validators.minLength(9), Validators.maxLength(10)]]
  });
  onSubmit() {
    console.warn(this.profileForm.value);
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
  connectToServer = (): Promise<any> => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(
          this.viewBillService.setMetterAnnounce(this.getedDataIdFromRoute, this.input, this.mobileNumber).subscribe((res) => {
            if (res) {
              this.errorHandler.toasterError('قبض آب بها برای شما پیامک خواهد شد', 'با تشکر از اعلام شماره کنتور خود');
              this.errorHandler.timeOutBeforeRoute('r/success');
            }
          })
        )
      }, 3000)
    )
  }

  spinnerCondition = (val: any) => {
    this.spinnerWrapper.loadingStatus$.subscribe(status => {
      this.clickableButton = status;
      this.notification = status;
    })
  }

  createSpinner = (canLoad: boolean) => {
    canLoad ? this.spinnerWrapper.startLoading() : this.spinnerWrapper.stopLoading()
  }

  spinnerChecker = (bol: boolean): Promise<any> => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(this.createSpinner(bol))
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
    this.spinnerCondition(a);
    if (a)
      await this.connectToServer().catch(err => console.log(err));
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
