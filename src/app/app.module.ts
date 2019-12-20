import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasuredValueListComponent } from './components/measured-value-list/measured-value-list.component';
import { MeasuredValueService } from './services/measured-value.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasuredValueListComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MeasuredValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
