import { Location } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';

import { HelpService } from '../../services/help.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements AfterContentChecked {
  messages: string[] = [];

  modal = document.getElementById("myModal");
  btn = document.getElementById("myBtn");
  span = document.getElementsByClassName("close")[0];

  constructor(private helpService: HelpService, private _location: Location, private cr: ChangeDetectorRef) { }

  backClicked = () => this._location.back();

  // When the user clicks anywhere outside of the modal, close it
  // @HostListener('document: keyup', ['$event'])
  // outSideClicked = () => {
  //   if (event.target == this.modal) {
  //     this._location.
  //   }
  // }


  ngAfterContentChecked(): void {
    this.messages = this.helpService.messages;
    if (!this.messages) {
      console.log(this.messages);

      this.messages = this.helpService.defaultMessage;
      this.cr.detectChanges();
      // this.router.navigate()
    }
  }
}
