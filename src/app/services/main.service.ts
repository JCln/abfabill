import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IViewBill } from './iview-bill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private configUrl: string = '';

  constructor(private http: HttpClient) {
    this.getEnvironment();
  }

  private getEnvironment = (): void => {
    this.configUrl = environment.API_URL;
  }
  GET = (): Observable<Object> => {
    return this.http.get<IViewBill>(this.configUrl);
  }
}
