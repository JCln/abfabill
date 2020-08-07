import { Injectable } from '@angular/core';

import { IAboutUs } from './../../interfaces/Iabout-us';

const list: IAboutUs[] = [
  { name: 'اصغر غریبی', email: '' },
  { name: 'سپهر شمسایی', email: '' },
  { name: 'علی رستمی', email: '' },
  { name: 'بابک غریبی', email: '' }
];

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  getAboutUs = () => {
    return list;
  }
}
