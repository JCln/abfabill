import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from './error-handler.service';
import { IViewBill } from './iview-bill';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private mainConfigUrl = '';
  // private auxiliaryConfigUrl: string = '';
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/xml; charset=utf-8'
      }
    )
  };

  analyticsAccessToken = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ya29.a0AfH6SMCdOJz1HNclR93UF97W_S2JM_rd1rlcq9LOt4Qx5Ys5WMSGX3RVPOzldRy5sAzt-PF-QwA3MWbGy2D5wC13Ppww0IY9PZcpRCgGeYtiGdoN-nqLNaPxLGIIGADopGqo4JfUxm6K3-2GCd0XlpOkk46SoiqAlEB7'
      }
    )
  };

  analyticsRefreshToken = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ODgxNjA5OTEzMzU4LWhyazRlbWU4YzU2YmU4M29rbzZ0NTNiZzIyNm1kMXMyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tOk1lVkNFNVJodjFYRjZqQlZ3Uk5Ta2tEcA=='
      }
    )
  };


  private getEnvironment = (): void => {
    this.mainConfigUrl = environment.API_URL;
    // this.auxiliaryConfigUrl = environment.API_URL_auxiliary;
  }

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {
    this.getEnvironment();
  }

  GET = (ID: string, URL: string, base64?: string): Observable<IViewBill> => {
    if (base64) {
      return this.http.get<IViewBill>(this.mainConfigUrl + '/' + URL + '/' + base64 + '/' + ID, this.httpOptions).pipe(
        retry(1), // retry failed request up to 1
        catchError(err => this.errorHandler.errorHandler(err))
      );
    } else {
      return this.http.get<any>(this.mainConfigUrl + '/' + URL + '/' + ID, this.httpOptions).pipe(
        retry(1), // retry failed request up to 1
        catchError(err => this.errorHandler.errorHandler(err))
      );
    }
  }

  SET = (URL: string, body: object): Observable<any> => {
    return this.http.post<any>(this.mainConfigUrl + '/' + URL, body)
      .pipe(
        catchError(err => this.errorHandler.errorHandler(err)));
  }

  // setAnalyticsAccessToken = (URL: string, body: any): any => {
  //   return this.http.post<any>(URL, body, this.analyticsAccessToken).pipe(
  //     retry(2),
  //     catchError(this.setAnalyticsRefreshToken()));
  //   // catchError(err => this.errorHandler.errorHandler(err)));
  //   // catchError(async (err) => console.log(err)));
  //   // );
  // }

  // setAnalyticsRefreshToken = ()=> {
  //   console.log(1);
    
  //   const URL = 'https://accounts.google.com/o/oauth2/token';
  //   const body = {
  //     grant_type: "authorization_code",
  //     code: "4/2AHV4kIYM4NX8JljC7w9fS6LATU3o8z0177COhz6f2bYg6xfM-CZkqH4JawCwGqqoKdjYAiA-YYsvfSuTxVFgfk",
  //     redirect_uri: "http://crm.abfaesfahan.ir", // should change for crm.abfa
  //     client_id: "881609913358-hrk4eme8c56be83oko6t53bg226md1s2.apps.googleusercontent.com"
  //   }
  //   this.http.post<any>(URL, body, this.analyticsAccessToken).pipe(
  //     retry(3),
      
  //     catchError(async (err) => console.log(err)));
  //     // catchError(this.setAnalyticsAccessToken())
  // }
  // setAnalyticsRefreshToken = (URL: string, body: any): any => {

  //   return this.http.post<any>(URL, body, this.analyticsAccessToken).pipe(
  //     retry(3),
  //     catchError(async (err) => console.log(err)));
  // }
}
