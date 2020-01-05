import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IViewBill } from './iview-bill';
import { environment } from 'src/environments/environment';
import { catchError, retry, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private mainConfigUrl: string = '';
  private auxiliaryConfigUrl: string = '';


  private getEnvironment = (): void => {
    this.mainConfigUrl = environment.API_URL;
    this.auxiliaryConfigUrl = environment.API_URL2;
  }

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {
    this.getEnvironment();
  }

  GET = (ID: number, URL: string, base64: string): Observable<IViewBill[]> => {
    let res1 = this.http.get<IViewBill>(this.mainConfigUrl + '/' + URL + '/' + base64 + '/' + ID).pipe(
      catchError(err => this.errorHandler.errorHandler(err)),
      retry(1) // retry failed request up to 1
    );
    let res2 = this.http.get<IViewBill>(this.auxiliaryConfigUrl + '/' + URL + '/' + base64 + '/' + ID).pipe(
      catchError(err => this.errorHandler.errorHandler(err)),
      retry(1) // retry failed request up to 1
    );
    return forkJoin([res1, res2]);
  }
}
