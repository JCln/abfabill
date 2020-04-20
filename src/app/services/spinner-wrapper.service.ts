import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerWrapperService {

  private loadingStatus = new BehaviorSubject<boolean>(false);
  loadingStatus$ = this.loadingStatus.asObservable();

  loading(loadingStatus: boolean) {
    this.loadingStatus.next(loadingStatus);
  }
  
  // loadingOLd (loadingStatus: boolean) {
  //   this.loadingStatus.next(loadingStatus);
  // }

  // startLoading() {
  //   this.loading(true);
  // }

  // stopLoading() {
  //   this.loading (false);
  // }

  constructor() { }
}
