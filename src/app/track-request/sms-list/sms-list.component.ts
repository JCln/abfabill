import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sms-list',
  templateUrl: './sms-list.component.html',
  styleUrls: ['./sms-list.component.scss']
})
export class SmsListComponent {
  @Input() smsList: object;
  @Input() status: string;
}
