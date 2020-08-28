import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';


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

  constructor(private interfaceService: InterfaceService, private router: Router) { }

  canConnectToServer = (trackNumber: string): boolean => {
    return this.interfaceService.getTrackingRequest(trackNumber).subscribe((res: any) => {
      if (res) {
        this.setTracks(res);
        this.router.navigate(['tr/', trackNumber]);
        return true;
      }
      return false;
    });
  }

  private waiting(input: string) {
    return new Promise(resolve => {
      const a = this.canConnectToServer(input);
      resolve(a);
    });
  }

  asyncMethod = async (input: string) => {
    const a = await this.waiting(input);
    return a;
  }
  setTrackToZero = () => {
    return new Promise(resolve => {
      this.setTracks([]);
      resolve();
    })
  }
  backToFirstPage = (): void => {
    this.router.navigateByUrl('/ph');
  }
}