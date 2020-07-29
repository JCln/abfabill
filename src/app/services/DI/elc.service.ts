import { Injectable } from '@angular/core';

import { elcs } from '../../service-desk/elc-services/elcs';

@Injectable({
  providedIn: 'root'
})
export class ElcService {
  getElc() {
    return elcs;
  }
}
