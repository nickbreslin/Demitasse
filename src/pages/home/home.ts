import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

import { AddCupModal } from '../add-cup/add-cup';

import { Data } from '../../providers/data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(
  	public navCtrl: NavController,
  	public actionSheetCtrl: ActionSheetController,
  	public dataService: Data,
  	public modalCtrl: ModalController
  ) {

  	this.saveItem('a');

  	this.dataService.getData().then((todos) => {
 
      if(todos){
        console.log(JSON.parse(todos));
      } else {
      	console.log('empty');
      }
 
    });
  }

  ionViewDidLoad(){
   console.log('here');
  }

  addItem(){
 
    let addModal = this.modalCtrl.create(AddCupModal);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }

  viewItem(item){
    this.navCtrl.push(AddCupModal, {
      item: item
    });
  }

  saveItem(item){
    //this.items.push(item);
    this.dataService.save(item);
  }

	presentActionSheet() {
	   let actionSheet = this.actionSheetCtrl.create({
	     title: 'Modify your album',
	     buttons: [
	       {
	         text: 'Destructive',
	         role: 'destructive',
	         handler: () => {
	           console.log('Destructive clicked');
	         }
	       },
	       {
	         text: 'Archive',
	         handler: () => {
	           console.log('Archive clicked');
	         }
	       },
	       {
	         text: 'Cancel',
	         role: 'cancel',
	         handler: () => {
	           console.log('Cancel clicked');
	         }
	       }
	     ]
	   });

	   actionSheet.present();
	}
}
