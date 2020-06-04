import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HelpService } from './../../services/help.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  previousPage: string;

  changeBackImg = () => {
    if (screen.width > 549) {
      return;
    }
    const abfaImg = document.querySelector('.abfa');
    abfaImg.classList.toggle('toggleImg');
  }
  constructor(private _location: Location, private helpService: HelpService, private router: Router) { }

  // back to previous page
  backClicked = () => {
    this._location.back();
  }
  ngOnInit() {
    this.goToHome();
  }
  goToHome = () => {
    this.previousPage = window.location.pathname.split('/')[1];
  }

  help = () => {
    this.helpService.addMessage('بررسی آخرین قبض', 'می ­توانید اطلاعات مربوط به آخرین قبض خود، اعم از شناسه قبض، شناسه پرداخت، مهلت و مبلغ قابل پرداخت، شماره فعلی و پیشین و .... را مشاهده کنید', 'assets/axiliaryroute/2.png', 'assets/axiliaryroute/2-2.png', '', 'lot of main text');
    this.router.navigate(["/aux/inner", { outlets: { modal: ["help"] } }]);
  }

}
