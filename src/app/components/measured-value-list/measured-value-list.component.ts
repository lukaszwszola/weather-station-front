import { Component, OnInit } from '@angular/core';
import { MeasuredValue } from 'src/app/common/measured-value';

@Component({
  selector: 'app-measured-value-list',
  templateUrl: './measured-value-list.component.html',
  styleUrls: ['./measured-value-list.component.css']
})
export class MeasuredValueListComponent implements OnInit {

  measuredValues: MeasuredValue[];

  constructor() { }

  ngOnInit() {
  }

}
