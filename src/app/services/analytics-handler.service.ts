import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsHandlerService implements ErrorHandler {
  constructor() { }

  // getRefreshToken = (body: any): Observable<any> => {
  //   return this.mainService.setAnalyticsRefreshToken('https://accounts.google.com/o/oauth2/token', body);
  // }

  refreshToken = () => {
    const body = {
      grant_type: "authorization_code",
      code: "4/2AHV4kIYM4NX8JljC7w9fS6LATU3o8z0177COhz6f2bYg6xfM-CZkqH4JawCwGqqoKdjYAiA-YYsvfSuTxVFgfk",
      redirect_uri: "https://oauth.pstmn.io/v1/callback", // should change for crm.abfa
      client_id: "881609913358-hrk4eme8c56be83oko6t53bg226md1s2.apps.googleusercontent.com"
    }
    // this.FooterComponent.analyticsVisited = ;
    // this.getRefreshToken(body).subscribe(res => console.log(res)
    // );
  }

  handler(error: number) {
    switch (error) {
      case 400:
        console.log('400 geted');
        break;
      case 401:
        console.log('401 geted');
        // this.refreshToken();
        break;
      default:
        console.log('there is no network access');
    }
  }


  handleError(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      console.log('yessss');
      this.handler(error.status);
    }
    console.log('whyyy');

    return throwError(error);

  }

}
