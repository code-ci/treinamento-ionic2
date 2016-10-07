import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

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

  removeFavoritos(index) {
    this.favoritos.splice(index, 1);

    this.storage.set("favoritos", JSON.stringify(this.favoritos));
  }

  goToDetalhes(chien)  {
    this.navCtrl.push(DetalhesPage, {
      chien: chien
    });
  }
}
