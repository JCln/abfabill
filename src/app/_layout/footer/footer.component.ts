import { AfterViewChecked, Component } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewChecked {
  pageViewAnalytics: number;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  ngAfterViewChecked() {
    setTimeout(() => {
      this.pageViewAnalytics = this.googleAnalyticsService.pageViewAnalytics;
    }, 1000);
  }

}