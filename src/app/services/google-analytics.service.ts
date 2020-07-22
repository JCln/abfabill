import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { ViewBillService } from 'src/app/services/view-bill.service';

declare const ga; // Declare ga as a function
declare const gtag;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  navEndEvents;
  constructor(public router: Router, private interfaceService: ViewBillService) {
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
  // pageViews = () => {
  //   const body = {
  //     "reportRequests": [
  //       {
  //         "viewId": "217853513",
  //         "dateRanges": [
  //           {
  //             "startDate": "2020-05-01",
  //             "endDate": "today"
  //           }
  //         ],
  //         "metrics": [
  //           {
  //             "expression": "ga:pageviews"
  //           }
  //         ]
  //       }
  //     ]
  //   }
  //   return this.interfaceService.getPageViewsAnalytics(body);
  // }
  
}
