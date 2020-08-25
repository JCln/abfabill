import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { URIIpgService } from './../../../services/DI/uriipg.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  IpgInfo: any = [];
  constructor(private uriIpgService: URIIpgService, private router: Router) { }

  ngOnInit(): void {
    this.IpgInfo = this.uriIpgService.decodeFirstURI();

  }
  fuckIt = (as: any) => {
    window.location.href = `http://crm.abfaesfahan.ir/${as}`;
  }

}
