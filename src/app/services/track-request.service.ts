import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { SpinnerWrapperService } from './spinner-wrapper.service';
import { ViewBillService } from './view-bill.service';

@Injectable({
  providedIn: 'root'
})
export class TrackRequestService {
  private tracks = new BehaviorSubject<any>([]);
  $tracks = this.tracks.asObservable();

  // getTracks = (): any => {
  //   this.tracks.asObservable();
  // }
  setTracks = (newTrack: any) => {
    this.tracks.next(newTrack);
  }

  constructor(private interfaceService: ViewBillService, private router: Router, private spinnerWrapper: SpinnerWrapperService) { }

  canConnectToServer = (trackNumber: number): boolean => {
    // this.spinnerWrapper.startLoading();
    return this.interfaceService.getTrackingRequest(trackNumber).subscribe((res: any) => {
      if (res) {
        this.setTracks(res);
        // this.spinnerWrapper.stopLoading();
        return true;
      } else {
        return false;
      }
    }
    );
  }
  noInfoExists = this.router.navigate(['/pg']);
}
