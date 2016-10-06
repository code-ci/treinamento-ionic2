import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DetalhesPage } from '../detalhes/detalhes';
import { MovieProvider } from '../../providers/movie-provider';

@Component({
  selector: 'page-recentes',
  templateUrl: 'recentes.html',
  providers: [MovieProvider]
})
export class RecentesPage {

  private query:string;
  private movies:Array<any>;
  private

  constructor(public navCtrl: NavController, private movieProvider: MovieProvider, private storage:Storage) {
    this.movies = [];
  }

  ionViewDidLoad() {
  }

  addToFavoritos(movie) {
    this.storage.get("favoritos").then(value => {
      let favoritos;
      if (value) {
        favoritos = JSON.parse(value);
      } else {
        favoritos = [];
      }

      favoritos.push(movie);
      this.storage.set("favoritos", JSON.stringify(favoritos));
    });
  }

  search() {
    this.movieProvider.search(this.query).then((data) => {
      this.movies = data.results;
    });
  }

  goToDetalhes(movie)  {
    this.navCtrl.push(DetalhesPage, {
      movie: movie
    });
  }

}
