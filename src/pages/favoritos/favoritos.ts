import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html'
})
export class FavoritosPage {

  private favoritos:Array<any>;

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  ionViewWillEnter() {
    this.storage.get("favoritos").then((value) => {
      this.favoritos = JSON.parse(value);
    });
  }

}
