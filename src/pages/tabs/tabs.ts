import { Component } from '@angular/core';

import { MoviesPage } from '../movies/movies';
import { AboutPage } from '../about/about';
import { FavoritosPage } from '../favoritos/favoritos';
import { SeriesPage } from '../series/series';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabMovies: any = MoviesPage;
  tab2Root: any = FavoritosPage;
  tab3Root: any = AboutPage;
  tabSeries: any = SeriesPage;

  constructor() {

  }
}
