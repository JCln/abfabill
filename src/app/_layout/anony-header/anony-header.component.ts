import { Location } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';

import { HelpService } from './../../services/help.service';

@Component({
  selector: 'app-anony-header',
  templateUrl: './anony-header.component.html',
  styleUrls: ['./anony-header.component.scss']
})
export class AnonyHeaderComponent implements AfterViewChecked {
  showBack = true;
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
    if (this._location.path() == '/pg') {
      helpButton.style.top = '3rem';
      return true;
    }
    return false;
  }
  // to check if we are in first page and not show back url
  canShowBackUrl = () => {
    // maybe better with getState()
    if (this.whereWhere()) {
      this.showBack = false;
      this.showMemberInfo = false;
    }
    else {
      this.showBack = true;
      this.showMemberInfo = true;
    }
  }
  ngAfterViewChecked(): void {
    this.canShowBackUrl();
    this.cdRef.detectChanges();
  }

  help = () => {
    this.helpService.someName();
    this.helpService.help();
  }

}
