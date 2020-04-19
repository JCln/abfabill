import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  timeLeft: number = 10;
  interval;
  billId: string = '';

  constructor(private interactionService: InteractionService, private router: Router) { }

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
