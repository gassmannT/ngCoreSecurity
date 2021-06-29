import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WeatherForecast } from '../shared/models/weather-forecast.model';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
})
export class ProtectedComponent implements OnInit {
  weatherForecasts$!: Observable<WeatherForecast[]>;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherForecasts$ = this.weatherService.getAll().pipe(
      catchError((error) => {
        alert(error.error);

        console.error('Error loading data', error);
        return of([]);
      })
    );
  }
}
