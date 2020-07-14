import { Location } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';

import { HelpService } from './../../services/help.service';

@Component({
  selector: 'app-anony-header',
  templateUrl: './anony-header.component.html',
  styleUrls: ['./anony-header.component.scss']
})
export class AnonyHeaderComponent implements AfterViewChecked {
  showBack = false;
  showMemberInfo = false;

  constructor(private _location: Location, private helpService: HelpService, private cdRef: ChangeDetectorRef) { }
  changeBackImg = () => {
    if (screen.width > 549) {
      return;
    }
    const abfaImg = document.querySelector('.abfa');
    abfaImg.classList.toggle('toggleImg');
  }
  // back to previous page
  backClicked = () => this._location.back();

  private whereWhere = () => {
    let helpButton = document.querySelector('.help') as HTMLElement;
    if (this._location.path() === '/pg') {
      helpButton.style.top = '2.5rem';
      return 1;
    }
    if (this._location.path() === '/rn' || this._location.path() === '/tr') {
      helpButton.style.top = '5.5rem';
      return 2;
    }
    return 3;
  }
  // to check if we are in first page and not show back url
  canShowBackUrl = () => {
    if (this.whereWhere() === 1) {
      this.showBack = false;
      this.showMemberInfo = false;
    }
    else if (this.whereWhere() === 2) {
      this.showBack = true;
      this.showMemberInfo = false;
    }
    else {
      this.showMemberInfo = true;
      this.showBack = true;
    }
  }
  ngAfterViewChecked(): void {
    this.canShowBackUrl();
    this.cdRef.detectChanges();
  }

  help = () => {
    const a = window.location.pathname.split('/').pop();

    this.helpService.someName(a);
    this.helpService.help();
  }

}
