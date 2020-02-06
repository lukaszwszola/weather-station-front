import { Component, OnInit } from '@angular/core';
import { SensorServicesService } from 'src/app/services/sensor-services.service';
import { Sensor } from 'src/app/common/sensor';
import { MeasuredValueService } from 'src/app/services/measured-value.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {

  constructor(private sensorsServices: SensorServicesService, private measuredValueService: MeasuredValueService) { }

  sensors: Sensor[];
  ngOnInit() {
    this.getListOfSensors();
  }

  getListOfSensors() {
    this.sensorsServices.getSensors().subscribe(
      sensorList =>  {
        this.sensors = sensorList;
        this.fillSensorsList();
      }      
    )
  }

  fillSensorsList() {
    Promise.all(this.sensors).then((sensorsResult) => {
      var select = document.getElementById('sensors');
      for (var i = 1; i <= sensorsResult.length; i++) {
        var option = '<option value="' + i + '" >' + sensorsResult[i - 1].name + '</option>';
        select.insertAdjacentHTML('beforeend', option);
      }
    })
  }
  callType(value){
    var lastValue = document.getElementById('actualValue');
    this.measuredValueService.getLastMeasuredValues(value.toString()).subscribe(
      newValue => {
        lastValue.textContent = newValue.value;
      }
    );
    let sensorList: HTMLSelectElement  = document.getElementById('sensors') as HTMLSelectElement;
    let index = sensorList.options[sensorList.selectedIndex].value;
    this.measuredValueService.getMeasuredValuesList(index).subscribe(
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
  }
}
