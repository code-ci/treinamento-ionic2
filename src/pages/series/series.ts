import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DetalhesPage } from '../detalhes/detalhes';
import { SeriesProvider } from '../../providers/series-provider';

@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
  providers: [SeriesProvider]
})
export class SeriesPage {

  private query:string;
  private series:Array<any>;

  constructor(public navCtrl: NavController,
              private seriesProvider: SeriesProvider,
              private storage:Storage) {
    this.series = [];
  }

  ionViewDidLoad() {
  }

  addToFavoritos(serie) {
    this.storage.get("favoritos").then(value => {
      let favoritos;
      if (value) {
        favoritos = JSON.parse(value);
      } else {
        favoritos = [];
      }

      favoritos.push(serie);
      this.storage.set("favoritos", JSON.stringify(favoritos));
    });
  }

  search() {
    this.seriesProvider.search(this.query).then((data) => {
      this.series = data.results;
    });
  }

  goToDetalhes(serie)  {
    this.navCtrl.push(DetalhesPage, {
      chien: serie
    });
  }

}
