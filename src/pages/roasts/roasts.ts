import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';

import { AddRoastModal } from '../add-roast/add-roast';

import { Data } from '../../providers/data';
/*
  Generated class for the Roasts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-roasts',
  templateUrl: 'roasts.html'
})
export class RoastsPage {

  constructor(
    public navCtrl: NavController,
    public dataService: Data,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('Hello Roasts Page');
  }

  addRoast(){
 
    let add2Modal = this.modalCtrl.create(AddRoastModal);
 
    add2Modal.onDidDismiss((item) => {
 
 
    });
 
    add2Modal.present();
 
  }


}
