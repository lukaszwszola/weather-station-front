import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { MeasuredValue } from '../common/measured-value';

@Injectable({
  providedIn: 'root'
})
export class MeasuredValueService {

  private baseUrl = 'http://localhost:8080/value/last100';

  constructor(private httpClient: HttpClient) { }

  getMeasuredValuesList(sensorID: String): Observable<MeasuredValue[]> {
    return this.httpClient.get<MeasuredValue[]>(this.baseUrl + "?sensorId=" + sensorID);
  }

  getMeasuredValuesForChart(sensorID: String) : Observable<any> {
    return this.httpClient.get("http://localhost:8080/value/last100?sensorId=" + sensorID)
    .pipe(result => result);
  }

  getLastMeasuredValues(sensorID: String) : Observable<any> {   
    return this.httpClient.get("http://localhost:8080/value/last?sensorId=" + sensorID)
    .pipe(result => result);
  }

  getInvtervalMeasuredValues(dateFrom:String, dateTo:String, sensorID: String) : Observable<any> { 
    return this.httpClient.get("http://localhost:8080/value/intervalValues?dateFrom="+ dateFrom + "&dateTo=" + dateTo +"&sensorId=" + sensorID)
    .pipe(result => result);
  }
}

interface GetResponse {
  _embedded: {
    measuredValues: MeasuredValue[];
  }
}
