import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IViewBill } from './iview-bill';
import { environment } from 'src/environments/environment';
import { catchError, retry, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private configUrl: string = '';

  headers = [{
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'application/json',
  }];

  private getEnvironment = (): void => {
    this.configUrl = environment.API_URL;
  }

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {
    this.getEnvironment();
  }

  GET = (ID: string, URL: string, base64: string): Observable<IViewBill> => {
    return this.http.get<IViewBill>(this.configUrl + '/' + URL + '/' + base64 + '/' + ID)
      .pipe(
        retry(2), // retry failed request up to 2
        catchError(err => this.errorHandler.handleError)
      );
  }
  // this.http.get<any>(environment.API_URL + '/' + URL + '/' + ID);
}
