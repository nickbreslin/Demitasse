import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the AddRoast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-roast',
  templateUrl: 'add-roast.html'
})
export class AddRoastModal {
 
  constructor(public navCtrl: NavController,
  	public view: ViewController) {
 
  }
 
  saveItem(){
  
    this.view.dismiss();
 
  }
 
  close(){
    this.view.dismiss();
  }
 
}