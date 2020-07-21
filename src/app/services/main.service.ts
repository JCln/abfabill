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

  analyticsHeaders = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ya29.a0AfH6SMCkYDLGqbjL5JNNkjm3yas_kcvenh5mtw1B8gEN-4VYrjZDFb___TMnjnP85Fu3yCYXPAMsZixN4c0oUz0Zk8sGI_rUFI4qNIRmc9g8RqZVwmZNQx6UIk2FOLdpvvk-gETXIfPe3x7BGcGDcu_GW5zOkpYP7QYL'
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

  setAnalytics = (URL: string, body: any): any => {

    return this.http.post<any>(URL, body, this.analyticsHeaders).pipe(
      retry(3),
      catchError(err => this.errorHandler.errorHandler(err)));
  }
}
