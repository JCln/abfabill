import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  childEl: any = [];
  constructor(private receiptService: InteractionService) {
  }

  ngAfterContentChecked(): void {
    this.receiptService.receipt$.subscribe(res => {
      console.log(res);
      this.childEl = res;
    });
  }
  fixedWidth = () => {
    let main = document.querySelector('.main') as HTMLElement;
    let _numbers1 = document.querySelector('._first') as HTMLElement;
    let _numbers2 = document.querySelector('._second') as HTMLElement;
    let _numbers3 = document.querySelector('._third') as HTMLElement;
    let _numbers4 = document.querySelector('._forth') as HTMLElement;

    main.style.display = "grid";
    main.style.gridTemplateColumns = "repeat(4, minmax(20rem , 1fr))";
    main.style.overflow = "auto";
    main.style.justifyContent = "inherit";

    _numbers1.style.width = "100%";
    _numbers2.style.width = "100%";
    _numbers3.style.width = "100%";
    _numbers4.style.width = "100%";
  }

  ngOnInit() {
  }
  exportAsPrint(): void {
    window.print();
    window.close();
  }


}
