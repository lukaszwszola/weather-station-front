import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MeasuredValue } from 'src/app/common/measured-value';

export class ChartSensorData {
  weatherDates: string[]
  values: string[]
  measuredValues: MeasuredValue[]
}
@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  data: Subject<ChartSensorData> = new Subject<ChartSensorData>();
  
  constructor() { }
  updateValues(weatherDates, values, mv){
    this.data.next({weatherDates: weatherDates, values: values, measuredValues: mv});    
  }
}