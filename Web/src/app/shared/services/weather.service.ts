import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../models/weather-forecast.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<WeatherForecast[]> {
    return this.httpClient.get<WeatherForecast[]>(
      `${environment.apiUrl}WeatherForecast`
    );
  }
}
