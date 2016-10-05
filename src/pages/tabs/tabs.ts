import { Component } from '@angular/core';

import { RecentesPage } from '../recentes/recentes';
import { AboutPage } from '../about/about';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RecentesPage;
  tab2Root: any = FavoritosPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
