import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HelpService } from './../../services/help.service';

@Component({
  selector: 'app-anony-header',
  templateUrl: './anony-header.component.html',
  styleUrls: ['./anony-header.component.scss']
})
export class AnonyHeaderComponent implements OnInit {
  showBack = true;
  showMemberInfo = false;
  currentLastRoute: any;

  constructor(private _location: Location, private router: Router, private helpService: HelpService) { }
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
  private isInPGPage = this.router.url.split('/').pop(); // need to attention because last url just checking
  // private isInPGPage = (callback: () => void) => {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd)
  //       this.currentLastRoute = event.url.split('/').pop();
  //   });    
  //   callback();
  // }

  private someName = () => {
    console.log(this.currentLastRoute);

    switch (this.isInPGPage) {
      case 'pg':
        this.helpService.addMessage('from pg', 'some text', '', 'more pg', 'lot of pg text here');
        break;
      case 'bill':
        this.helpService.addMessage('from bill', 'some text', '', 'more bill', 'lot of text here');
        break;
      case 'ma':
        console.log('wooow we are here');

        this.helpService.addMessage('from ma', 'some text', 'more footer', 'assets/imgs/waterMeter.png', 'lot of text here');
        break;
      case 'kardex':
        this.helpService.addMessage('from kardex', 'some text', '', 'more kardex footer', 'lot of text here');
        break;
      case 'installment':
        this.helpService.addMessage('from installment', 'some text', '', 'more installment footer', 'lot of text here');
        break;
      case 'elcs':
        this.helpService.addMessage('from elcs', 'some text', '', 'more elcs footer', 'lot of text here');
        break;
      case 'cs':
        this.helpService.addMessage('from cs', 'some text', '', 'more cs', 'lot of text here');
        break;

      default:
        break;
    };
  }
  private routeToAxiliary = () => this.router.navigate(["/aux/inner", { outlets: { modal: ["help"] } }]);


  help = () => {
    // this.isInPGPage(this.someName);
    this.someName();

    // this.isInPGPage(this.someName);
    // this.isInPGPage();
    this.routeToAxiliary();
  }


}
