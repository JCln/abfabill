import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  changeBackImg = () => {
    if (screen.width > 549) {
      return;
    }
    const abfaImg = document.querySelector('.abfa');
    abfaImg.classList.toggle('toggleImg');
  }
  constructor() { }

  ngOnInit() {
  }

}
