import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit, AfterViewInit {
  chartOweDate: any[];
  chartData: any[];

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartLabels: Array<any> = [];
  barChartData: Array<any> = [];
  barChartColors: Array<any>;
  barChartOptions: ChartOptions;


  constructor(private interationService: InteractionService) { }

  infoFromKardexForBar = () => {
    this.interationService.chartOweData$.subscribe(res => {
      this.chartOweDate = res;
    });
    this.interationService.chartData$.subscribe(res => this.chartData = res);
  }

  insertToChart = () => {
    this.barChartData = [{ data: this.chartData, label: 'مصرف' }];
    this.barChartLabels = this.chartOweDate;

    this.barChartColors = [
      {
        backgroundColor: 'rgb(72, 79, 222)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
    ];
    this.barChartOptions = {
      responsive: true
    };
  }

  ngOnInit(): void {
    this.chartOweDate = [];
    this.chartData = [];

    this.infoFromKardexForBar();

    this.insertToChart();
  }

  ngAfterViewInit = () => {
  }


}
