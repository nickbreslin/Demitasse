import { Component } from '@angular/core';

import { ModalController, NavController, ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

import { AddCupModal } from '../add-cup/add-cup';

import { Data } from '../../providers/data';

import { CupModel } from '../../models/cup';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public activeCup = false;
  public cup = new CupModel();

  
  constructor(
  	public navCtrl: NavController,
  	public actionSheetCtrl: ActionSheetController,
  	public dataService: Data,
  	public modalCtrl: ModalController,
    public toastCtrl: ToastController
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

  startTime = 0;

  testFunc(a) {
    console.log('testfunc');
    console.log(a);
  }

  addItem(){
 
    let addModal = this.modalCtrl.create(AddCupModal);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);

            this.activeCup = true;
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
             this.activeCup = false;
             let toast = this.toastCtrl.create({
              message: 'Archived',
              duration: 1500,
              position: 'top'
            });
            toast.present();
	         }
	       },
	       {
	         text: 'Cancel',
	         role: 'cancel',
	         handler: () => {
	           console.log('Cancel clicked');
             this.activeCup = false;
	         }
	       }
	     ]
	   });

	   actionSheet.present();
	}
}
