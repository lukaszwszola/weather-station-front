import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Sensor } from '../common/sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorServicesService {

  constructor(private httpClient: HttpClient) { }

  getSensors() : Observable<Sensor[]> { 
    return this.httpClient.get<Sensor[]>("http://localhost:8080/sensors/sensors-list");
  }
}
