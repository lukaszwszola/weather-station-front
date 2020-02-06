import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-interval',
  templateUrl: './time-interval.component.html',
  styleUrls: ['./time-interval.component.css']
})
export class TimeIntervalComponent implements OnInit {

  constructor() { }

  dateFrom: Date = new Date();
  settingsFrom = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: false
  };

  dateTo: Date = new Date();
  settingsTo = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: false
  };

  ngOnInit() {
  }

}
