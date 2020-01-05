import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pardakht';
  id = "10018315";
  
  constructor(private router: Router) {
    this.router.navigate(['pardakht', this.id]);
  }
  ngOnInit() {
  }
}
