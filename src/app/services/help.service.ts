import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  messages: string[] = [];
  
  addMessage = (header: string, mainText: string, img: string ,secondImg?: string, footer?: string, secondMainText?: string ) => {
    this.messages[0] = header;
    this.messages[1] = mainText;
    this.messages[2] = img;
    this.messages[3] = footer;
    this.messages[4] = secondImg;
    this.messages[5] = secondMainText;

  }

  constructor() { }
}
