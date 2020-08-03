import { AfterViewInit, Component } from '@angular/core';
import { InterfaceService } from 'src/app/services/interface.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  lastMonthAnalytics: number;

  constructor(private interfaceService: InterfaceService) { }

  printValues(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        this.printValues(obj[key]);
        if (obj.values > 20000)
          this.lastMonthAnalytics = obj.values;
      } else {
        console.log(obj[key]);
      }
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.interfaceService.getAnalytic().subscribe(res => {
        if (res) {
          this.printValues(res);
        }
      });
    }, 1000);
  }

}