import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements AfterViewInit, OnDestroy {
  //unSub
  unSubReceipt: Subscription;

  billId: string;
  $childEl: any = [];
  constructor(private receiptService: InteractionService, private router: Router) {
  }
  ngAfterViewInit(): void {
    this.unSubReceipt = this.receiptService.receipt$.subscribe(res => {
      if (res) {
        console.log(res);
        this.$childEl = res;
      }
      else {
        this.receiptService.billId$.subscribe(res => this.billId = res);
        console.log(this.billId);

        this.router.navigate(['/' + this.billId + '/bill?checked=1']);
      }
    });
  }
  exportAsPrint(): void {
    window.print();
    window.close();
  }

  ngOnDestroy() {
    this.unSubReceipt.unsubscribe();
  }
}
