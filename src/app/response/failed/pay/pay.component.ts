import { Component, OnInit } from '@angular/core';

import { URIIpgService } from './../../../services/DI/uriipg.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  IpgInfo: any = [];
  constructor(private uriIpgService: URIIpgService) { }

  ngOnInit(): void {
    this.IpgInfo = this.uriIpgService.decodeURI();
  }

}
