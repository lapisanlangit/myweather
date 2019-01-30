import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather'
import { Storage } from '@ionic/Storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  city:string;
  listData:any;
  constructor(public navCtrl: NavController, 
    private weatherprovider:WeatherProvider,
    private storage: Storage) {
    storage.set('city', 'Jakarta');
  }


  ngOnInit(){
    this.storage.get('city').then((val) => {
      this.city=val;
      this.weatherprovider.getWeather(this.city)
      .subscribe(
        data => {
          this.listData = data;
        },
        error => {
          alert("error get data Weather");
          return;
        }
      );
    });
  }


}
