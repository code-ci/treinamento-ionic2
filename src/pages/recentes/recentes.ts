import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'recentes.html'
})
export class RecentesPage {

  constructor(public navCtrl: NavController) {

  }

  goToDetalhes()  {
    this.navCtrl.push(DetalhesPage);
  }

}
