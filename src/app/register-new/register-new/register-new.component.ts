import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { SpinnerWrapperService } from 'src/app/services/spinner-wrapper.service';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { CheckRoute } from './../../shared/check-route';

const minNeighbourBillId = 4;
const maxNeighbourBillId = 13;
const mobileLength = 11;
const nationalId = 10;
@Component({
  selector: 'app-register-new',
  templateUrl: './register-new.component.html',
  styleUrls: ['./register-new.component.scss']
})
export class RegisterNewComponent extends CheckRoute implements OnInit {
  input: number;
  nationalId: string = '';
  mobileNumber: string = '';
  address: string = '';
  firstName: string = '';
  sureName: string = '';
  neighbourBillId: string = '';
  // spinner
  notification: boolean = false;
  // notificationText = '';

  // textError from server
  $textError: string;
  showMessage: boolean = false;
  // button

  private minNeighbourBillId = minNeighbourBillId;
  private maxNeidghbourBillId = maxNeighbourBillId;

  clickableButton: boolean = true;
  private mobileLength = mobileLength;
  private nationalIdLength = nationalId;

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
    Validators.minLength(10), Validators.maxLength(10)]],
    phoneNumber: ['', [Validators.pattern("^[0-9]*$"),
    Validators.minLength(8), Validators.maxLength(10)]],
    fatherName: [''],
    mobile: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]*$")]],//, forbiddenNameValidator(/bob/i)   
    SelectedServices: this.fb.array([1, 2]),
    neighbourBillId: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(3),
    Validators.maxLength(13)]],
    address: ['', [Validators.required, Validators.minLength(10)]],
    requestOrigin: 6,
    postalCode: ['', [Validators.pattern("^[0-9]*$"),
    Validators.minLength(9), Validators.maxLength(10)]]
  });
  onSubmit() {
    this.nestingLevel();
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
    if (this.nationalId.trim() === null || this.nationalId.trim().length !== this.nationalIdLength) {
      this.errorHandler.customToaster(4000, 'کد ملی اشتباه است');
      return false;
    }
    return true;
  }
  validInput2 = (): boolean => {
    if (!this.pushOrPopFromMobileNumber() || this.mobileNumber.toString().trim() === '' || this.mobileNumber.toString().trim().length > this.mobileLength || this.mobileNumber.toString().trim().length < this.mobileLength) {
      this.errorHandler.customToaster(4000, 'شماره موبایل اشتباه است');
      return false;
    }
    return true;
  }
  checkNeighbourBillId = (): boolean => {
    if (this.neighbourBillId.toString().trim() === null || this.neighbourBillId.toString().trim().length > this.maxNeidghbourBillId || this.neighbourBillId.toString().trim().length < this.minNeighbourBillId) {
      this.errorHandler.customToaster(4000, 'شناسه قبض همسایه اشتباه است');
      return false;
    }
    return true;
  }
  checkAddress = (): boolean => {
    if (this.address.toString().trim() === '' || this.address.toString().trim().length < 10) {
      this.errorHandler.customToaster(4000, 'آدرس اشتباه است');
      return false;
    }
    return true;
  }
  checkFirstName = (): boolean => {
    if (this.firstName.toString().trim() === '') {
      this.errorHandler.customToaster(4000, 'نام را وارد کنید');
      return false;
    }
    return true;
  }
  checkSureName = (): boolean => {
    if (this.sureName.toString().trim() === '') {
      this.errorHandler.customToaster(4000, 'نام خانوادگی را وارد کنید');
      return false;
    }
    return true;
  }
  checkValidInput = (): boolean => {
    if (this.checkFirstName() && this.checkSureName() && this.validInput1() && this.validInput2() && this.checkNeighbourBillId() && this.checkAddress())
      return true;
    return false;
  }
  connectToServer = (): Promise<any> => {
    return new Promise(resolve =>
      resolve(
        this.viewBillService.setNewRegister(this.profileForm.value).subscribe((res) => {
          if (res) {
            console.log('successfully done');
          }
        })
      )
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
  nestingLevel = async () => {
    const a = this.checkValidInput();
    console.log(a);
    if (a) {
      this.spinnerChecker(true);
      const b = await this.spinnerChecker(a);
      this.spinnerCondition(a);
      if (a)
        await this.connectToServer().catch(err => console.log(err));
    }
  }


  ngOnInit(): void {
    // if (RegisterNewComponent.firstTime) {
    //   this.helpService.customName();
    //   this.helpService.help();
    //   RegisterNewComponent.firstTime = false;
    // }
    // this.errorHandler.toasterError('مشترک گرامی این قسمت در حال بروز رسانی است، لطفا از طریق اپلیکیشن همراه آبفا اصفهان و یا شماره 1522 اقدام نمایید', '', 'makeInfo');
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
