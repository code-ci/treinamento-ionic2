import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private alunos = [
    'Ana Paula Ribeiro',
    'Arthur Mendes de Oliveira',
    'Elberth AP da Silva Júnior',
    'Emerson Caique Ribeiro',
    'Felipe Augusto Trindade',
    'Felipe Siqueira Pinheiro',
    'Hsu Fu Chien',
    'Gabriel Mendonça',
    'Gilson G. Ribeiro',
    'Guilherme Henrique do Carmo Ribeiro',
    'Gustavo Vagner',
    'Júlio César Fortunato Filho',
    'Lucas William Correa Schiming',
    'Miguel Otavio Francisco de Oliveira',
    'Paulo Vinicius Baleeiro Ferreira',
    'Rosane Ramos de Almeida',
    'Rafael Lopes Leme da Silva',
    'Valdinei Baptista Junior',
    'Valdir Eduardo Teles Amorim',
    'Vinicius Fernando Sampaio da Silva',
    'Wagner da Silva Goncalves Gabriel Nunes'
  ];

  constructor(public navCtrl: NavController) {

  }

}
