import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../shared/models/weather-forecast.model';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.component.html',
})
export class WeatherComponent implements OnInit {
  weatherForecasts$!: Observable<WeatherForecast[]>;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherForecasts$ = this.weatherService.getAll();
  }
}
