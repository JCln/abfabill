import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElcService } from 'src/app/services/DI/elc.service';

import { IElcServies } from '../../interfaces/I-elc-service';
import { ErrorHandlerService } from './../../services/error-handler.service';
import { elcs } from './elcs';

@Component({
  selector: 'app-elc-services',
  templateUrl: './elc-services.component.html',
  styleUrls: ['./elc-services.component.scss']
})
export class ElcServicesComponent implements OnInit, AfterContentChecked, OnDestroy {
  static elcWarnTime = true;
  elcs: IElcServies[];
  sevageSelected = false;
  checkedParameter: any;

  constructor(
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    elcService: ElcService) {
    this.elcs = elcService.getElc();
  }
  checkboxChanged = (e: any, d: any) => {
    d.checked = e.target.checked;
    // this.elcService.pipe
  }
  checkboxStatus = (item: number, bol: boolean) => {
    elcs[item].checked = bol;
  }
  ngOnInit() {
    this.errorHandler.toasterError('مشترک گرامی این قسمت درحال بروز رسانی است، لطفااز طریق اپلیکیشن همراه آبفا اصفهان و یا شماره 1522 اقدام نمایید', '', 'makeInfo');

  }
  ngAfterContentChecked(): void {
    this.checkedParameter = this.route.snapshot.queryParamMap.get('checked');
    this.checkboxStatus(this.checkedParameter, true);
  }

  canSendRequest = () => {
    return new Promise(resolve => {
      this.elcs.map(items => {
        if (items.checked === true) {
          resolve(items.name);
        }
        resolve(items);
      });
    })
  }

  connectToServer = async () => {
    const a = await this.canSendRequest();
    console.log(a);

  }
  ngOnDestroy(): void {
    this.elcs.map(items => {
      items.checked = false;
    });
  }
}
