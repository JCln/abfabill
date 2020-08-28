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
  // if page refreshed or there is no bill id back to bill=? page
  getedDataIdFromRoute: any = [];
  //unSub
  unSubReceipt: Subscription;

  billId: string;
  $childEl: any = [];
  constructor(private receiptService: InteractionService, private router: Router) {
  }
  isNull = (value: any) => typeof value === 'undefined' || !value || value.length === 0;

  ngAfterViewInit(): void {
    this.unSubReceipt = this.receiptService.receipt$.subscribe(res => {
      if (!this.isNull(res[0])) {
        console.log(res);
        this.$childEl = res;
      }
      else {
        this.getedDataIdFromRoute = window.location.pathname.split('/')[1];
        this.router.navigateByUrl('/' + this.getedDataIdFromRoute + '/bill?checked=1');
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
