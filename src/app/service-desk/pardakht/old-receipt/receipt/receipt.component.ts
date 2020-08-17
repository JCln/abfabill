import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements AfterViewInit {

  $childEl: any = [];
  constructor(private receiptService: InteractionService, private router: Router) {
  }
  ngAfterViewInit(): void {
    this.receiptService.receipt$.subscribe(res => {
      if (res) {
        console.log(res);
        this.$childEl = res;
      }
      else {
        const billid = this.receiptService.billId$;
        this.router.navigate([billid, '/bill?checked=1']);
      }
    });
  }
  fixedWidth = () => {
    const main = document.querySelector('.main') as HTMLElement;
    const _numbers1 = document.querySelector('._first') as HTMLElement;
    const _numbers2 = document.querySelector('._second') as HTMLElement;
    const _numbers3 = document.querySelector('._third') as HTMLElement;
    const _numbers4 = document.querySelector('._forth') as HTMLElement;

    main.style.display = "grid";
    main.style.gridTemplateColumns = "repeat(4, minmax(20rem , 1fr))";
    main.style.overflow = "auto";
    main.style.justifyContent = "inherit";

    _numbers1.style.width = "100%";
    _numbers2.style.width = "100%";
    _numbers3.style.width = "100%";
    _numbers4.style.width = "100%";
  }
  exportAsPrint(): void {
    window.print();
    window.close();
  }


}
