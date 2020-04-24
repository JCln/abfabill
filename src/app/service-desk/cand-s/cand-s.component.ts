import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cand-s',
  templateUrl: './cand-s.component.html',
  styleUrls: ['./cand-s.component.scss']
})
export class CAndSComponent implements OnInit {
  private criticalSelected = false;
  userText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
