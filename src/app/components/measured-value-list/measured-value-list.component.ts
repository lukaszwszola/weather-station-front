import { Component, OnInit } from '@angular/core';
import { MeasuredValue } from 'src/app/common/measured-value';
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
    this.measuredValuesList();
  }

  measuredValuesList() {
    this.measuredValueService.getMeasuredValuesList().subscribe(
      data => {
        this.measuredValues = data;
      }
    )
  }

}
