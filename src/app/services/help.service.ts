import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  // messages: string[] = [];
  private countdownEndSource = new BehaviorSubject<any>('');
  countdownEnd$ = this.countdownEndSource.asObservable();

  addMessage = (header: string, mainText: string, img: string, footer?: string, ...moreText: string[]) => {
    console.log(1);
    this.countdownEndSource.next(header);
    // this.countdownEndSource.next(mainText);
    // this.countdownEndSource.next(img);
    
    // this.messages[0] = header;
    // this.messages[1] = mainText;
    // this.messages[2] = img;
    // this.messages[3] = footer;
    // this.messages = moreText;
  }

  constructor() { }
}
