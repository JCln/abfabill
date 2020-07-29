import { Component, OnInit } from '@angular/core';
import { InterfaceService } from 'src/app/services/interface.service';
import { SpinnerWrapperService } from 'src/app/services/spinner-wrapper.service';

import { CheckRoute } from './../../shared/check-route';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent extends CheckRoute implements OnInit {
  memberInfo: any = [];

  connectToServer = () => {
    this.viewBillService.getMemberInfo(this.getedDataIdFromRoute).subscribe((res: any) => {
      if (!this.isNull(res)) {
        this.spinnerWrapper.stopLoading();
        this.memberInfo = res;
        this.memberInfo.firstName = this.memberInfo.firstName.trim();
        this.memberInfo.sureName = this.memberInfo.sureName.trim();
      }
    })
  }

  constructor(private viewBillService: InterfaceService, private spinnerWrapper: SpinnerWrapperService) {
    super();
  }

  ngOnInit(): void {
    this.spinnerWrapper.startLoading();
    this.connectToServer();
  }

}
