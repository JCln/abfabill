import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent implements OnInit {
  spinnerBoolean = false;
  showMoreButton = false;

  testObject: any = [
    { amount: '2990000', billId: '10018315', Date: '98/10/10', deadLine: '98/11/12', isPayed: false },
    { amount: '983000', billId: '10018315', Date: '98/10/10', deadLine: '98/11/12', isPayed: true },
    { amount: '983000', billId: '10018315', Date: '98/10/10', deadLine: '98/11/12', isPayed: true },
    { amount: '983000', billId: '10018315', Date: '98/10/10', deadLine: '98/11/12', isPayed: true }
  ]
  constructor() { }

  showMoreButtonClicked = (): void => {
    this.showMoreButton = !this.showMoreButton;
    scroll(0, 1000);
  }
  
  ngOnInit() {
  }

}
