import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InteractionService } from 'src/app/services/interaction.service';
import { SpinnerWrapperService } from 'src/app/services/spinner-wrapper.service';

import { ViewBillService } from './../../services/view-bill.service';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {
  billId: string = '';
  memberInfo: Observable<any>;

  getDataFromRoute = () => {
    this.interactionService.billId$.subscribe(res => this.billId = res);
  }

  connectToServer = () => {
    this.viewBillService.getMemberInfo(this.billId).subscribe((res: any) => {
      if (res) {
        this.spinnerWrapper.loading(false);
        this.memberInfo = res;

      }
    })
  }

  constructor(private interactionService: InteractionService, private viewBillService: ViewBillService, private spinnerWrapper: SpinnerWrapperService) {
    this.getDataFromRoute();
  }

  ngOnInit(): void {
    this.spinnerWrapper.loading(true);
    this.connectToServer();
  }

}
