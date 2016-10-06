import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';
import { MovieProvider } from '../../providers/movie-provider'

@Component({
  selector: 'page-recentes',
  templateUrl: 'recentes.html'
})
export class RecentesPage {

  private query:string;
  private movies:Array<any>;

  constructor(public navCtrl: NavController,
              public movieProvider: MovieProvider) {
    this.movies = [];
  }

  search() {
    this.movieProvider.search(this.query)
        .then((data) => {
          this.movies = data.results;
        }).catch(() => {
          this.movies = [];
        });
  }

  goToDetalhes(xpto)  {
    this.navCtrl.push(DetalhesPage, {
      'movie': xpto
    });
  }

}
