import { Component, OnInit } from '@angular/core';
import { MeasuredValueService } from 'src/app/services/measured-value.service';
import { Sensors } from 'src/app/common/measured-value';
import { Sensor } from 'src/app/common/sensor';
import { SensorServicesService } from 'src/app/services/sensor-services.service';

@Component({
  selector: 'app-last-value',
  templateUrl: './last-value.component.html',
  styleUrls: ['./last-value.component.css']
})
export class LastValueComponent implements OnInit {
  
  constructor(private _measuredValueService: MeasuredValueService) { }

  lastValue;
  sensorName;

  ngOnInit() {
    this._measuredValueService.getLastMeasuredValues(Sensors.UVlight.toString())
    .subscribe(res => {
      this.lastValue = res.value;
      this.sensorName = res.sensor.name;      
    })
    
   




    


  }
}
