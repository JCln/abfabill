import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

import { InterfaceService } from './interface.service';

declare const ga; // Declare ga as a function
declare const gtag;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  pageViewAnalytics: number;
  navEndEvents;
  constructor(public router: Router, private interfaceService: InterfaceService) {
    this.navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    this.navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-152433655-1', {
        'page_path': event.urlAfterRedirects
      });
    });
  }

  //create our event emitter to send our data to Google Analytics
  eventEmitter(
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel,
      eventValue: eventValue
    });
  }
  routerView = () => {
    this.navEndEvents.subscribe((event: NavigationEnd) => {
      ga('set', 'page', event.urlAfterRedirects);
      ga('send', 'pageview');
    });
  }

  private pageViews(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        this.pageViews(obj[key]);
        if (obj.values > 20000)
          this.pageViewAnalytics = obj.values;
      }
    }
  }

  getpageViews = () => {
    if (!this.pageViewAnalytics) {
      this.interfaceService.getAnalytic().subscribe(res => {
        if (res)
          this.pageViews(res);
      });
    }
  }
}