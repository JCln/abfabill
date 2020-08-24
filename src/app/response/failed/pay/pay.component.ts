import { Component, OnInit } from '@angular/core';
import { URIIpgService } from 'src/app/services/DI/uriipg.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  IpgInfo: Array<any> = [];

  constructor(private uriipgService: URIIpgService) { }

  ngOnInit(): void {
    this.IpgInfo = this.uriipgService.decodeURI();
  }

}
