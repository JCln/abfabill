import { Component, OnInit } from '@angular/core';

import { SpinnerWrapperService } from '../services/spinner-wrapper.service';

@Component({
  selector: 'app-spinner-wrapper',
  templateUrl: './spinner-wrapper.component.html',
  styleUrls: ['./spinner-wrapper.component.scss']
})
export class SpinnerWrapperComponent implements OnInit {
  notification: boolean = false;

  constructor(private spinnerWrapper: SpinnerWrapperService) { }

  ngOnInit(): void {
    this.spinnerWrapper.loadingStatus$.subscribe(res =>
      this.notification = res
    )
  }

}
