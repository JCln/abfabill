import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pardakht';
  idRoutePart = '1234567890101';

  constructor(private router: Router) {
    this.getRouteIdValue();
  }
  getRouteIdValue = () => {
    this.idRoutePart = window.location.href.split('/').pop();
  }
  ngOnInit() {
    this.router.navigate([this.idRoutePart]);
  }
}
