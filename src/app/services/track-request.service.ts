import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { ViewBillService } from './view-bill.service';

@Injectable({
  providedIn: 'root'
})
export class TrackRequestService {
  private tracks = new BehaviorSubject<any>([]);

  getTracks(): Observable<any> {
    return this.tracks.asObservable();
  }
  private setTracks = (newTrack: any) => {
    this.tracks.next(newTrack);
  }

  constructor(private interfaceService: ViewBillService, private router: Router) { }

  canConnectToServer = (trackNumber: number): boolean => {
    return this.interfaceService.getTrackingRequest(trackNumber).subscribe((res: any) => {
      if (res) {
        this.setTracks(res);
        this.router.navigate(['tr']);

        return true;
      } else {
        return false;
      }
    });
  }

  private waiting(input: number) {
    return new Promise(resolve => {
      const a = this.canConnectToServer(input);
      resolve(a);
    });
  }

  asyncMethod = async (input: number) => {
    const a = await this.waiting(input);
    return a;
  }

  noInfoExists = this.router.navigate(['/pg']);
}