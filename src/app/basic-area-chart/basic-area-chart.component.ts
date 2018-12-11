import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-area-chart',
  templateUrl: './basic-area-chart.component.html',
  styleUrls: ['./basic-area-chart.component.scss']
})
export class BasicAreaChartComponent implements OnInit {

  options: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }]
    };

  }

}
