import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RoastsPage } from '../pages/roasts/roasts';

import { AddCupModal } from '../pages/add-cup/add-cup';
import { AddRoastModal } from '../pages/add-roast/add-roast';

import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';


@NgModule({
  declarations: [
    MyApp,
    
    AboutPage,
    HomePage,
    TabsPage,
    RoastsPage,

    AddCupModal,
    AddRoastModal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    AboutPage,
    RoastsPage,
    HomePage,
    TabsPage,

    AddCupModal,
    AddRoastModal
  ],
  providers: [Storage, Data]
})
export class AppModule {}
