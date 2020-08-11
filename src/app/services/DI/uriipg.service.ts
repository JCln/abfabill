import { Injectable } from '@angular/core';

import { DecodeURIIpgsService } from './decode-uriipgs';

@Injectable({
  providedIn: 'root'
})
export class URIIpgService {
  constructor(private decodeuri: DecodeURIIpgsService) { }

  decodeURI = () => {
    return this.decodeuri.decodedURI();
  }
}
