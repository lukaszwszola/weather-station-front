import { Component, OnInit } from '@angular/core';
import { MeasuredValueService } from 'src/app/services/measured-value.service';
import { Chart } from 'chart.js';
import { ChartDataService, ChartSensorData } from 'src/app/services/chart-data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  _event: Subscription = null;
  chart:Chart = []
  constructor(private _measuredValueService: MeasuredValueService, private chartService: ChartDataService) {     
    this._event = chartService.data.subscribe((val) => {      
      this.updateChart(val)
    })
  }
  ngOnInit() {
    this._measuredValueService.getMeasuredValuesForChart("1")
      .subscribe(res => {
        const weatherDates = [];
        const values = this.getFields(res, "value");
        let mTime = this.getFields(res, "measuredTime")
        mTime.forEach((res) => {
          weatherDates.push(new Date(res).toLocaleString());
        })
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: values,
                borderColor: '#3d5afe',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      });
  }
  getFields(input, field) : string[] {
    var output = [];
    for (var i = 0; i < input.length; ++i)
      output.push(input[i][field]);
    return output;
  }
  updateChart(data: ChartSensorData) {
    this.chart.data = {
      labels: data.weatherDates,
      datasets: [
        {
          data: data.values,
          borderColor: '#3d5afe',
          fill: false
        },
      ]
    };
    this.chart.update();
  }
  ngOnDestroy(){
    this._event.unsubscribe();
  }
}