import { Component, OnInit } from '@angular/core';
import { MeasuredValue } from 'src/app/common/measured-value';
import { MeasuredValueService } from 'src/app/services/measured-value.service';
import { Subscription } from 'rxjs';
import { ChartDataService } from 'src/app/services/chart-data.service';

@Component({
  selector: 'app-measured-value-list',
  templateUrl: './measured-value-list.component.html',
  styleUrls: ['./measured-value-list.component.css']
})
export class MeasuredValueListComponent implements OnInit {

  _event: Subscription = null;  
  measuredValues: MeasuredValue[];
  i: number = 0;

  constructor(private measuredValueService: MeasuredValueService, private chartService: ChartDataService) { 
    this._event = chartService.data.subscribe((val) => {      
      this.measuredValues = val.measuredValues;
    })
  }
  ngOnInit() {  
    this.measuredValuesList("1");
  }

  measuredValuesList(senorId: String) {    
    this.measuredValueService.getMeasuredValuesList(senorId).subscribe(
      data => {
        this.measuredValues = data;
      }
    )
  }
  ngOnDestroy(){
    this._event.unsubscribe();
  }
}
