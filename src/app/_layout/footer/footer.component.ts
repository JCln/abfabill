import { AfterViewInit, Component } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  lastMonthAnalytics: number;
  a: number;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }
  printValues(obj): number {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        this.printValues(obj[key]);
      } else {
        if (obj[key] > 15000) {
          this.a = obj[key];
        }
      }
    }
    return this.a;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.googleAnalyticsService.pageViews().subscribe((res: any) => {
        if (res) {
          this.lastMonthAnalytics = this.printValues(res);
        }
      });
    }, 2000);
  }

}