import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../services/error-handler.service';
import { HelpService } from './../../services/help.service';

@Component({
  selector: 'app-cand-s',
  templateUrl: './cand-s.component.html',
  styleUrls: ['./cand-s.component.scss']
})
export class CAndSComponent implements OnInit {
  static candWarnTime = true;
  private criticalSelected = false;
  userText: string = '';

  constructor(private helpService: HelpService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    if (CAndSComponent.candWarnTime) {
      this.helpService.customName();
      this.helpService.help();
      CAndSComponent.candWarnTime = false;
    }
    this.errorHandler.toasterError('مشترک گرامی این قسمت درحال بروز رسانی است، لطفااز طریق اپلیکیشن همراه آبفا اصفهان و یا شماره 1522 اقدام نمایید', '', 'makeInfo');

  }

}
