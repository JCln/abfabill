import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anony-header',
  templateUrl: './anony-header.component.html',
  styleUrls: ['./anony-header.component.scss']
})
export class AnonyHeaderComponent implements OnInit {
  showBack = true;

  constructor(private _location: Location) { }
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
    }
  }
  ngOnInit() {
    this.canShowBackUrl();
  }

}
