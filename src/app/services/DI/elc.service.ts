import { Injectable } from '@angular/core';

import { elcs } from './elcs';

@Injectable({
  providedIn: 'root'
})
export class ElcService {
  getElc() {
    return elcs;
  }
}
