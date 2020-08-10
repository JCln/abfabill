import { Component, OnInit } from '@angular/core';


export interface IWoow {
  id: number;
  value: string;
}
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  IpgInfo: IWoow[] = [];
  a: any;
  b: any;
  c: any;

  decodeApiKey = (apiKey: string): any => {
    atob(apiKey);
  }
  constructor() {
      }

  test2 = () => {
    const a = window.location.pathname.split('/');
    let i: number = 4;
    for (i; i <= 6; i++) {
      this.IpgInfo
    }
    console.log(this.IpgInfo);


    // console.log(window.location.pathname.split('/')[4].toString());
    // let i: number = 4;
    // const a = window.location.pathname.split('/');
    // for (i; i <= 6; i++) {
    //   this.IpgInfo = this.decodeApiKey(a[i]);
    //   this.IpgInfo.push(this.decodeApiKey(a[i]));
    // }
    // console.log(this.IpgInfo);

  }
  ngOnInit(): void {
    console.log(window.location.pathname.split('/')[4]);
    
    const a = window.location.pathname.split('/')[4]
    this.a = atob(a);
    // console.log(atob(window.location.pathname.split('/')[5]));
    // console.log(atob(window.location.pathname.split('/')[6]));
  }

}
