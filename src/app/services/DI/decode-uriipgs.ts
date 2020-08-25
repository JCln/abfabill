import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecodeURIIpgsService {
  IpgInfo: any = [];
  IpgFailedInfo: any = [];

  decodedURI = (): Array<[]> => {
    const c = window.location.pathname.split('/')[4];

    const a = window.location.pathname.split('/')[5];
    const b = window.location.pathname.split('/')[6];
    try {
      this.IpgInfo.push(c);
      this.IpgInfo.push(a);
      this.IpgInfo.push(b);
    } catch (e) { // catches a malformed URI
      console.error(e);
    }
    return this.IpgInfo;
  }

  decodedFirstURI = (): Array<[]> => {
    const c = window.location.pathname.split('/')[4];
    this.IpgFailedInfo.push(c);
    return this.IpgFailedInfo;
  }
}