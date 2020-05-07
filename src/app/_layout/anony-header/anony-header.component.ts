import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { InteractionService } from './../../services/interaction.service';

@Component({
  selector: 'app-anony-header',
  templateUrl: './anony-header.component.html',
  styleUrls: ['./anony-header.component.scss']
})
export class AnonyHeaderComponent implements OnInit {
  showBack = true;
  showMemberInfo = false;

  constructor(private _location: Location, private interactionService: InteractionService) { }
  changeBackImg = () => {
    if (screen.width > 549) {
      return;
    }
    const abfaImg = document.querySelector('.abfa');
    abfaImg.classList.toggle('toggleImg');
  }
  // back to previous page
  backClicked = () => {
    this._location.back();
  }

  // to check if we are in first page and not show back url
  canShowBackUrl = () => {
    // maybe better with getState()
    if (this._location.path() === '/pg') {
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

}
