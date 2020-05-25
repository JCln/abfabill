import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/animations-route';

@Component({
  selector: 'app-anony-layout',
  templateUrl: './anony-layout.component.html',
  styleUrls: ['./anony-layout.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AnonyLayoutComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  constructor() { }

  ngOnInit() {
  }

}
