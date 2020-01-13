import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IViewBill } from './iview-bill';
import { environment } from 'src/environments/environment';
import { catchError, retry, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private mainConfigUrl: string = '';
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

  GET = (ID: string, URL: string, base64: string): Observable<IViewBill> => {
    return this.http.get<IViewBill>(this.mainConfigUrl + '/' + URL + '/' + base64 + '/' + ID, this.httpOptions).pipe(
      retry(1), // retry failed request up to 1
      catchError(err => this.errorHandler.errorHandler(err))
    );

    // let res1 = this.http.get<IViewBill>(this.mainConfigUrl + '/' + URL + '/' + base64 + '/' + ID).pipe(
    //   catchError(err => this.errorHandler.errorHandler(err)),
    //   retry(1) // retry failed request up to 1
    // );
    // let res2 = this.http.get<IViewBill>(this.auxiliaryConfigUrl + '/' + URL + '/' + base64 + '/' + ID).pipe(
    //   catchError(err => this.errorHandler.errorHandler(err)),
    //   retry(1) // retry failed request up to 1
    // );
    // return forkJoin([res1, res2]);
  }
}
