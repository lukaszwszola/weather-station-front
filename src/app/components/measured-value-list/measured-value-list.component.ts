import { Component, OnInit } from '@angular/core';
import { MeasuredValue, Sensors } from 'src/app/common/measured-value';
import { MeasuredValueService } from 'src/app/services/measured-value.service';

@Component({
  selector: 'app-measured-value-list',
  templateUrl: './measured-value-list.component.html',
  styleUrls: ['./measured-value-list.component.css']
})
export class MeasuredValueListComponent implements OnInit {

  measuredValues: MeasuredValue[];

  constructor(private measuredValueService: MeasuredValueService) { }

  ngOnInit() {
    let sensorList: HTMLSelectElement  = document.getElementById('sensors') as HTMLSelectElement;
    this.measuredValuesList("1");
  }

  measuredValuesList(senorId: String) {
    
    this.measuredValueService.getMeasuredValuesList(senorId).subscribe(
      data => {
        this.measuredValues = data;
        //console.log(data);
      }
    )

  }

}
