import { Component, OnInit } from '@angular/core';

import { IAboutUs } from './../../interfaces/Iabout-us';
import { AboutUsService } from './../../services/DI/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  list: IAboutUs[];

  constructor(private aboutUsService: AboutUsService) {
    this.list = this.aboutUsService.getAboutUs();
  }

  ngOnInit(): void {
  }

}
