import { Component, OnInit } from '@angular/core';
import { MeasuredValueService } from 'src/app/services/measured-value.service';

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

    this._measuredValueService.getLastMeasuredValues()
    .subscribe(res => {
      //console.log(res)
      this.lastValue = res.value;
      //console.log(res.value)
      this.sensorName = res.sensor.name;
    })
  }
}
