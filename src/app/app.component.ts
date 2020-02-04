import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ViewBillService } from './services/view-bill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pardakht';
  idRoutePart = '1234567890101';

  constructor(private router: Router, private viewBillService: ViewBillService) {
    this.getRouteIdValue(this.navigateToIdRoute);
  }
  getRouteIdValue = (callback: () => void) => {
    this.idRoutePart = window.location.href.split('/').pop();
    callback();
  }
  navigateToIdRoute = () => {
    // const isValidToRoute = this.viewBillService.checkValidRoute(this.idRoutePart);
    // console.log(isValidToRoute);
    
    // if (isValidToRoute === true) {
    //   console.log(isValidToRoute);
      
      this.router.navigate([this.idRoutePart]);
    //   return;
    // }
    // else {
    //   this.router.navigate(['/pageNotFound']);
    // }
  }
  ngOnInit() {
  }
}
