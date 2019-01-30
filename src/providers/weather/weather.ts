import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey="612de7c8eaa73f64005a4c482f939452";
  url="https://api.openweathermap.org/data/2.5/weather?q=";

  

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');

  }

  getWeather(city){
    return this.http.get(this.url+city+'&appid='+this.apiKey);

  }

}
