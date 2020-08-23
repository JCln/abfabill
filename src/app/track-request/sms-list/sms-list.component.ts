import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms-list',
  templateUrl: './sms-list.component.html',
  styleUrls: ['./sms-list.component.scss']
})
export class SmsListComponent implements OnInit {
  @Input() smsList: object;
  @Input() status: string;

  constructor(private router: Router) { }

  ngOnInit() {
    if (!this.smsList) {
      const trackNumber = location.pathname.split('/')[2];
      this.router.navigate(['tr/', trackNumber]);
      return;
    }
  }
}
