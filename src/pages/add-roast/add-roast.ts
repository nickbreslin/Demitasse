import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AddRoast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-roast',
  templateUrl: 'add-roast.html'
})
export class AddRoast {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AddRoast Page');
  }

}
