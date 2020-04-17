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
  // billId: string = '';
  billId: any;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        // this.router.navigate([`${this.billId}/bill`]);
        console.log(this.router.navigate([`${this.billId}/bill`]));

      }
    }, 1000)
  }
  constructor(private interactionService: InteractionService, private router: Router) { }

  // absolutely beautiful async could implement
  ngOnInit() {
    this.interactionService.billId$.subscribe((res) => {
      if (res) {
        this.billId = res;
        console.log(this.billId);
        this.startTimer();
      }
    });
  }

}
