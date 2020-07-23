import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

declare const ga; // Declare ga as a function
declare const gtag;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  navEndEvents;
  constructor(public router: Router) {
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

}
