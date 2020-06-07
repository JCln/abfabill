import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { HelpService } from './../../services/help.service';

@Component({
  selector: 'app-anony-header',
  templateUrl: './anony-header.component.html',
  styleUrls: ['./anony-header.component.scss']
})
export class AnonyHeaderComponent implements OnInit {
  showBack = true;
  showMemberInfo = false;

  constructor(private _location: Location, private helpService: HelpService) { }
  changeBackImg = () => {
    if (screen.width > 549) {
      return;
    }
    const abfaImg = document.querySelector('.abfa');
    abfaImg.classList.toggle('toggleImg');
  }
  // back to previous page
  backClicked = () => this._location.back();

  private whereWhere = this._location.path() === '/pg' ? true : false;
  // to check if we are in first page and not show back url
  canShowBackUrl = () => {
    // maybe better with getState()
    if (this.whereWhere) {
      this.showBack = false;
      this.showMemberInfo = false;
    }
    else {
      this.showMemberInfo = true;
    }
  }

  ngOnInit() {
    this.canShowBackUrl();
  }

  help = () => {
    this.helpService.someName();
      this.helpService.help();  
  }
  
}
