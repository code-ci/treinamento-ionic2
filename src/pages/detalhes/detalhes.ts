import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesPage {

  private movie:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = this.navParams.data.movie;
  }

  ionViewDidLoad() {
    console.log('Hello Detalhes Page');
  }

  onBackClick() {
    this.navCtrl.pop();
  }
}
