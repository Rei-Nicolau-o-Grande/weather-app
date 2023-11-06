import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WheaterHomeComponent } from './modules/wheater/page/wheater-home/wheater-home.component';
import { WeatherCardComponent } from './modules/wheater/components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WheaterHomeComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // <-- import the BrowserAnimationsModule
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
