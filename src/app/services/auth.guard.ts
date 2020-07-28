import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import { ErrorHandlerService } from './error-handler.service';
import { LogginsService } from './loggins.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  private idRoutePart = window.location.pathname.split('/')[1];
  private maxLength = 13;
  private minLength = 4;

  constructor(private router: Router, private errorHandler: ErrorHandlerService, private logginsService: LogginsService) { }

  private checkValidInput = (): boolean => {
    if (this.idRoutePart === null || this.idRoutePart.length > this.maxLength || this.idRoutePart.length <= this.minLength)
      return false;
    return true;
  }

  changeIdRoutePart = (val: string) => this.idRoutePart = val;

  checkValidRoute = (): boolean => {
    const regex = /^\d+$/i;

    if (regex.test(this.idRoutePart))
      return true;
    return false;
  }
  isValidBillId = async (input: string) => {
    await this.logginsService.checkValidation(input.toString());
    this.logginsService.getIsLoaded().subscribe(res => {
      if (res)
        return true;
      return false;
    });
  }

  mainCheckup = () => {
    if (this.checkValidInput() && this.checkValidRoute()) {
      if (this.isValidBillId(this.idRoutePart))
        return true;
      else {
        return false;
      }
    }
    this.router.navigate(['/pg']);
    this.errorHandler.handleError(406);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.mainCheckup();
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('child activated');

    return true;
  }


}
