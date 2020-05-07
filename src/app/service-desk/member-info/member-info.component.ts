import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InteractionService } from 'src/app/services/interaction.service';

import { ViewBillService } from './../../services/view-bill.service';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {
  billId: string = '';
  // spinner
  spinnerBoolean = true;
  // ----
  memberInfo: Observable<any>;

  getDataFromRoute = () => {
    this.interactionService.billId$.subscribe(res => this.billId = res);
  }

  connectToServer = () => {
    this.viewBillService.getMemberInfo(this.billId).subscribe((res: any) => {
      this.memberInfo = res;
    })
  }

  constructor(private interactionService: InteractionService, private viewBillService: ViewBillService) {
    this.getDataFromRoute();
  }

  ngOnInit(): void {
    this.connectToServer();
  }

}
