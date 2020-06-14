import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
    this.googleAnalyticsService.routerView();
  }
}

/** for rsa key
https://github.com/kjur/jsrsasign
https://github.com/rzcoder/node-rsa
https://www.npmjs.com/package/node-rsa
https://stackoverflow.com/questions/44887294/rsa-library-with-angular
https://travistidwell.com/jsencrypt/
https://github.com/travist/jsencrypt
 */