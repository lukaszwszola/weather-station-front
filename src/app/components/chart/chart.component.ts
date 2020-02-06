import { Component, OnInit } from '@angular/core';
import { MeasuredValueService } from 'src/app/services/measured-value.service';
import { Chart } from 'chart.js';
import { MeasuredValue } from 'src/app/common/measured-value';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart = [];

  constructor(private _measuredValueService: MeasuredValueService) { }

  ngOnInit() {

    //console.log(this._measuredValueService.getMeasuredValuesForChart())
    this._measuredValueService.getMeasuredValuesForChart()
      .subscribe(res => {
        //console.log(res)

        function getFields(input, field) {
          var output = [];
          for (var i = 0; i < input.length; ++i)
            output.push(input[i][field]);
          return output;
        }

        let values = getFields(res, "value");
        let mTime = getFields(res, "measuredTime")

        let weatherDates = []
        mTime.forEach((res) => {
          weatherDates.push(new Date(res).toLocaleString());
        })


        //console.log(values)
        //console.log(mTime)
        //console.log(weatherDates)

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
      })
  }
}
