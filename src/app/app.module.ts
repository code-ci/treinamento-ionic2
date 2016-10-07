import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { MoviesPage } from '../pages/movies/movies';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { SeriesPage } from '../pages/series/series';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FavoritosPage,
    MoviesPage,
    DetalhesPage,
    SeriesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FavoritosPage,
    MoviesPage,
    DetalhesPage,
    SeriesPage,
    TabsPage
  ],
  providers: [Storage]
})
export class AppModule {}
