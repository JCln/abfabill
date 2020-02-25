import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorHandlerService } from '../services/error-handler.service';
import { AuthGuard } from './../auth.guard';
import { IViewBill } from './../services/iview-bill';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  private maxLength = 13;
  private minLength = 4;
  input: number;

  constructor(private router: Router, private errorHandler: ErrorHandlerService, private authGuard: AuthGuard) { }

  @HostListener('document: keyup', ['$event'])
  onkeyUpHandler(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      this.checkValidInput();
    }
  }
  checkValidInput = () => {
    if (isNaN(this.input) || this.input === null || this.input.toString().length > this.maxLength || this.input.toString().length <= this.minLength) {
      this.input = null;
      this.errorHandler.handleError(404);
      return;
    } else {
      this.authGuard.changeIdRoutePart(this.input.toString());
      this.billIdValue(this.input);
    }
  }

  private billIdValue = (billId: IViewBill['billId']) => {
    this.router.navigate([billId]);
  }
  ngOnInit() {
  }

}
