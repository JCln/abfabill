import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { HelpService } from './../../services/help.service';
import { CheckRoute } from './../../shared/check-route';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends CheckRoute implements OnInit {
  previousPage: string;

  constructor(private _location: Location, private helpService: HelpService) {
    super();
  }

  changeBackImg = () => {
    if (screen.width > 549) {
      return;
    }
    const abfaImg = document.querySelector('.abfa');
    abfaImg.classList.toggle('toggleImg');
  }
  // toggle menu ul
  invisible = () => {
    const input = document.getElementById('input') as HTMLInputElement;
    if (input.checked === false) {
      input.checked = true;
    }
    else {
      input.checked = false;
    }
    this.changeBackImg();
  }

  // back to previous page
  backClicked = () => {
    this._location.back();
  }

  ngOnInit() {
    this.goToHome();
  }
  goToHome = () => {
    this.previousPage = this.getedDataIdFromRoute;
  }

  help = () => {
    const a = window.location.pathname.split('/').pop();
    this.helpService.someName(a);
    this.helpService.help();
  }

}
