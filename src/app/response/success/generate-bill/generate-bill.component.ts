import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.scss']
})
export class GenerateBillComponent implements OnInit, OnDestroy {

  timeLeft: number = 10;
  interval;
  billId: string = '';

  //unSubBillId
  unSubBillId: Subscription;

  constructor(private interactionService: InteractionService) { }

  // absolutely beautiful async could implement
  ngOnInit() {
    this.unSubBillId = this.interactionService.billId$.subscribe((res) => {
      if (res) {
        this.billId = res;
        console.log(this.billId);
      }
    });
  }
  ngOnDestroy() {
    this.unSubBillId.unsubscribe();
  }

}
