import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesPage {

  private chien:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.chien = this.navParams.data.chien;
  }

  onBackClick() {
    this.navCtrl.pop();
  }
}
