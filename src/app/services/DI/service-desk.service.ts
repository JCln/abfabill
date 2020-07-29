import { Injectable } from '@angular/core';

import { desks } from './services';

@Injectable({
  providedIn: 'root'
})
export class ServiceDeskService {

  getServiceDesks() {
    return desks;
  }
}
