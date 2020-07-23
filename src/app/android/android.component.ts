import { Component, OnInit } from '@angular/core';

import { GoogleAnalyticsService } from '../services/google-analytics.service';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.scss']
})
export class AndroidComponent implements OnInit {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.sendButtonEventToAnalytics();
  }
  sendButtonEventToAnalytics = () => {
    this.googleAnalyticsService.eventEmitter("userPage", "clicked", "userLabel", 5);
    this.googleAnalyticsService.routerView();
  }

}
