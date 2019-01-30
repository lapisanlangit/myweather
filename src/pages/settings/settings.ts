import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: String;
  
  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
  }

  ngOnInit() {
    this.storage.get('city').then((val) => {
      if (val==null) {
        this.city="Jakarta"
      } else {
        this.city=val
      }
    })
  }

  simpan(){
    console.log(this.city);
    this.storage.set('city', this.city);
    // this.navCtrl.push(HomePage);
  }
}





