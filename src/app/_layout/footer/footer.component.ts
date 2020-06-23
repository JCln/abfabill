import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lastMonthAnalytics: number = 405;
  newContacts: number = 181;

  constructor() { }

  ngOnInit() {
  }

}
