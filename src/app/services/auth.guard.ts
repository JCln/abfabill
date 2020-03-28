import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  private idRoutePart = window.location.pathname.split('/')[2];
  private maxLength = 13;
  private minLength = 4;

  constructor(private router: Router, private route: ActivatedRoute, private errorHandler: ErrorHandlerService) { }

  private checkValidInput = (): boolean => {
    if (this.idRoutePart === null || this.idRoutePart.toString().length > this.maxLength || this.idRoutePart.toString().length <= this.minLength)
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

  private mainCheckup = () => {
    if (this.checkValidInput() && this.checkValidRoute()) {
      return true;
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
