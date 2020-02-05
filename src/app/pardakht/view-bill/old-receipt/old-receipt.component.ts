import { Component, OnInit } from '@angular/core';

import { InteractionService } from './../../../services/interaction.service';

@Component({
  selector: 'app-old-receipt',
  templateUrl: './old-receipt.component.html',
  styleUrls: ['./old-receipt.component.scss']
})
export class OldReceiptComponent implements OnInit {
  childEl: any = [];
  constructor(private receiptService: InteractionService) {
  }

  ngAfterContentChecked(): void {
    this.receiptService.receipt$.subscribe(res => {
      console.log(res);
      this.childEl = res;
    });
  }
  ngOnInit() {
  }

}
