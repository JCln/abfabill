import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pardakht';
  idRoutePart = '123';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.getRouteIdValue();
  }
  getRouteIdValue = () => {
    this.idRoutePart = window.location.href.split("/").pop();
  }
  ngOnInit() {
    this.router.navigate(['', this.idRoutePart]);
  }
}
