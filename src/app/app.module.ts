import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasuredValueListComponent } from './components/measured-value-list/measured-value-list.component';
import { MeasuredValueService } from './services/measured-value.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './components/chart/chart.component';
import { LastValueComponent } from './components/last-value/last-value.component';
import { TimeIntervalComponent } from './components/time-interval/time-interval.component';
import { FormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasuredValueListComponent,
    ChartComponent,
    LastValueComponent,
    TimeIntervalComponent,
    SensorListComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularDateTimePickerModule
  ],
  providers: [MeasuredValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
