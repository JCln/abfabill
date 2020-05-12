import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {
  bubbleChartType: ChartType = 'bubble';
  bubbleChartLegend = true;
  bubbleChartData: ChartDataSets[];
  bubbleChartOptions: ChartOptions = {}
  
  constructor() { }

  ngOnInit(): void {
  }

}

  //  = [
  //   {
  //     data: [
  //       // [this.childProperty]
  //       { x: 10, y: 10, r: 10 },
  //       { x: 15, y: 5, r: 15 },
  //       { x: 26, y: 12, r: 23 },
  //       { x: 7, y: 8, r: 8 },
  //     ],
  //     label: 'Series A',
  //   },
  // ];

  
  //  {
  //   responsive: true,
  //   scales: {
  //     xAxes: [{
  //       ticks: {
  //         min: 0,
  //         max: 30,
  //       }
  //     }],
  //     yAxes: [{
  //       ticks: {
  //         min: 0,
  //         max: 30,
  //       }
  //     }]
  //   }
  // };