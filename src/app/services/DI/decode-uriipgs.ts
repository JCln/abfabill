import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecodeURIIpgsService {
  IpgInfo: any = [];

  private decodeApiKey = (apiKey: string): string => {
    return atob(apiKey);
  }

  decodedURI = (): any => {
    let i: number = 5;
    const a = window.location.pathname.split('/');
    for (i; i <= 6; i++) {
      this.IpgInfo.push(this.decodeApiKey(decodeURIComponent(a[i])));
    }
    return this.IpgInfo;
  }
}