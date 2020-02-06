import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { MeasuredValue } from '../common/measured-value';

@Injectable({
  providedIn: 'root'
})
export class SensorServicesService {

  constructor(private httpClient: HttpClient) { }

  getSensors() : Observable<any> { 
    return this.httpClient.get("http://localhost:8080/sensors/sensors-list")
    .pipe(result => result);
  }
}
