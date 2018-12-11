import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smoothed-line-chart',
  templateUrl: './smoothed-line-chart.component.html',
  styleUrls: ['./smoothed-line-chart.component.scss']
})
export class SmoothedLineChartComponent implements OnInit {

  options: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    };

  }

}
