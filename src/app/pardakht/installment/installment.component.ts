import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent implements OnInit {
  spinnerBoolean = false;
  testObject: any = [
    { amount: '2990000', billId: '10018315', Date: '98/10/10', deadLine: '98/11/12', isPayed: false },
    { amount: '983000', billId: '10018315', Date: '98/10/10', deadLine: '98/11/12', isPayed: false },
    { amount: '983000', billId: '10018315', Date: '98/10/10', deadLine: '98/11/12', isPayed: true },
    { amount: '983000', billId: '10018315', Date: '98/10/10', deadLine: '98/11/12', isPayed: false }
  ]
  constructor() { }

  ngOnInit() {
  }

}
