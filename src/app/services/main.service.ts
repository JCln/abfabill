import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from './error-handler.service';

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

  private getEnvironment = (): void => {
    this.mainConfigUrl = environment.API_URL;
    // this.auxiliaryConfigUrl = environment.API_URL_auxiliary;
  }

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {
    this.getEnvironment();
  }

  GET = (ID: string, URL: string, base64?: string): Observable<any> => {
    if (base64) {
      return this.http.get<any>(this.mainConfigUrl + '/' + URL + '/' + base64 + '/' + ID, this.httpOptions).pipe(
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

  GETAnalytics = (URL: string): any => {
    return this.http.get<any>(this.mainConfigUrl + '/' + URL).pipe(retry(2));
  }

  SET = (URL: string, body?: object): any => {
    if (body) {
      return this.http.post<any>(this.mainConfigUrl + '/' + URL, body)
        .pipe(
          catchError(err => this.errorHandler.errorHandler(err)));
    } else {
      return this.http.post<any>(this.mainConfigUrl + '/' + URL, '')
        .pipe(
          catchError(err => this.errorHandler.errorHandler(err)));
    }
  }

  PUT = (URL: string, body: object): any => {
    return this.http.put<any>(this.mainConfigUrl + '/' + URL, body)
      .pipe(
        catchError(err => this.errorHandler.errorHandler(err))
      )
  }
}
