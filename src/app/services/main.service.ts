import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IViewBill } from './iview-bill';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private configUrl: string = '';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {
    this.getEnvironment();
  }

  private getEnvironment = (): void => {
    this.configUrl = environment.API_URL;
  }
  GET = (): Observable<Object> => {
    return this.http.get<IViewBill>(this.configUrl).pipe(retry(2), // retry failed request up to 2
      catchError(err => this.errorHandler.handleError)
    );
  }
}
