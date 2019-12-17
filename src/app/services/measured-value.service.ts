import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MeasuredValue } from '../common/measured-value';

@Injectable({
  providedIn: 'root'
})
export class MeasuredValueService {

  private baseUrl = 'http://localhost:8080/value/last100';

  constructor(private httpClient: HttpClient) { }

  getMeasuredValuesList(): Observable<MeasuredValue[]> {
    return this.httpClient.get<MeasuredValue[]>(this.baseUrl);

  }
}

interface GetResponse {
  _embedded: {
    measuredValues: MeasuredValue[];
  }
}
