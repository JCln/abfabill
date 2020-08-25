import { Component, OnInit } from '@angular/core';

import { URIIpgService } from './../../../services/DI/uriipg.service';


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
  IpgInfo: any = [];

  constructor(private uriipgService: URIIpgService) {

  }
  ngOnInit(): void {
    this.IpgInfo = this.uriipgService.decodeURI();  
  }
}
