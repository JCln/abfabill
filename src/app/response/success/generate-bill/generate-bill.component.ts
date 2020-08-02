import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.scss']
})
export class GenerateBillComponent implements OnInit {

  timeLeft: number = 10;
  interval;
  billId: string = '';

  constructor(private interactionService: InteractionService) { }

  // absolutely beautiful async could implement
  ngOnInit() {
    this.interactionService.billId$.subscribe((res) => {
      if (res) {
        this.billId = res;
        console.log(this.billId);
      }
    });
  }

}
