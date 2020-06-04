import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HelpService } from '../../services/help.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit, AfterContentChecked {
  messages: string[] = [];

  modal = document.getElementById("myModal");
  btn = document.getElementById("myBtn");
  span = document.getElementsByClassName("close")[0];

  constructor(private router: Router, private helpService: HelpService) {


  }

  backClicked = () => this.router.navigate([{ outlets: { modal: null } }]);;

  // When the user clicks anywhere outside of the modal, close it
  // @HostListener('document: keyup', ['$event'])
  // outSideClicked = () => {
  //   if (event.target == this.modal) {
  //     this._location.
  //   }
  // }

  ngOnInit(): void {
    this.helpService.countdownEnd$.subscribe(res => console.log(res))
  }
  
  ngAfterContentChecked(): void {

    // this.messages = this.helpService.messages;
  }
}
