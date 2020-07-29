import { Injectable } from '@angular/core';

import { bankIcons } from './viewbill';

@Injectable({
  providedIn: 'root'
})
export class ViewbillService {

  getBankIcon = () => {
    return bankIcons;
  }
}
