import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

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
  exportAsPrint(): void {
    window.print();
    window.close();
  }


}
