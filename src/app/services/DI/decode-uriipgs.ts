import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecodeURIIpgsService {
  IpgInfo: any = [];

  decodedURI = (): Array<[]> => {
    let a = window.location.pathname.split('/')[5];
    a = decodeURIComponent(a);
    a = atob(a);

    let b = window.location.pathname.split('/')[6];
    b = decodeURIComponent(b);
    b = atob(b);
    try {
      this.IpgInfo.push(a);
      this.IpgInfo.push(b);
    } catch (e) { // catches a malformed URI
      console.error(e);
    }
    return this.IpgInfo;
  }
}