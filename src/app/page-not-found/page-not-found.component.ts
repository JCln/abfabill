import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IViewBill } from './../services/iview-bill';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  protected input: number;

  constructor(private router: Router) { }

  checkValidInput = () => {
    if (isNaN(this.input) || this.input === null) {
      return;
    } else {
      this.billIdValue(this.input);
    }
  }

  private billIdValue = (billId: IViewBill['billId']) => {
    this.router.navigate([billId]);
  }
  ngOnInit() {
  }

}
