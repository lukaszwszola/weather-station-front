import { Component, OnInit } from '@angular/core';
import { MeasuredValueService } from 'src/app/services/measured-value.service';
import { Chart } from 'chart.js';
import { MeasuredValue } from 'src/app/common/measured-value';

@Component({
  selector: 'app-time-interval',
  templateUrl: './time-interval.component.html',
  styleUrls: ['./time-interval.component.css']
})
export class TimeIntervalComponent implements OnInit {

  constructor(private measuredValueService: MeasuredValueService) { }

  dateFrom: Date = new Date();
  measuredValues: MeasuredValue[];
  settingsFrom = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: false
  };

  dateTo: Date = new Date();
  settingsTo = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: false
  };

  ngOnInit() {
  }

  callType(value) {
    var lastValue = document.getElementById('actualValue');
    this.measuredValueService.getLastMeasuredValues(value.toString()).subscribe(
      newValue => {
        lastValue.textContent = newValue.value;
      }
    );
  }

  applyInterval() {
    console.log("function called");
    let sensorList: HTMLSelectElement  = document.getElementById('sensors') as HTMLSelectElement;
    let index = sensorList.options[sensorList.selectedIndex].value;  
    let stringDateFrom: String = new Date(this.dateFrom).toISOString();
    let stringDateTo: String = new Date(this.dateTo).toISOString();
    this.measuredValueService.getInvtervalMeasuredValues(stringDateFrom, stringDateTo, index).subscribe(
      res => {
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


        console.log(values)
        console.log(mTime)
        console.log(weatherDates)
        var chart =  document.getElementById('canvas');
        chart = new Chart('canvas', {
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
      this.measuredValueService.getMeasuredValuesList(index).subscribe(
        data => {
          this.measuredValues = data;          
        }
      )




  }

}
