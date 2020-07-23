import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-no-layout',
  templateUrl: './no-layout.component.html',
  styleUrls: ['./no-layout.component.scss']
})
export class NoLayoutComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  constructor() { }

  ngOnInit() {
  }

}
