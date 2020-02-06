import { Component, OnInit } from '@angular/core';
import { SensorServicesService } from 'src/app/services/sensor-services.service';
import { Sensor } from 'src/app/common/sensor';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {

  constructor(private sensorsServices: SensorServicesService) { }

  sensors: Sensor[];
  ngOnInit() {
    this.sensorsServices.getSensors().subscribe(
      sensorList => {
        this.sensors = sensorList;
      }
    )

    var myOptions = ['one', 'two', 'three'];
    var select = document.getElementById('sensors');
    for (var i = 1; i <= this.sensors.length; i++) {
      var option = '<option value="' + i + '" >' + this.sensors[i - 1] + '</option>';
      select.insertAdjacentHTML('beforeend', option);
    }
  }

}
