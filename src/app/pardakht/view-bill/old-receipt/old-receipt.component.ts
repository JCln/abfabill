import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-old-receipt',
  templateUrl: './old-receipt.component.html',
  styleUrls: ['./old-receipt.component.scss']
})
export class OldReceiptComponent implements OnInit {
  @Input() childEl: any;

  constructor() { }

  ngOnInit() {
  }

}
