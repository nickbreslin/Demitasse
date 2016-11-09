// App
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { TabsPage    } from '../pages/tabs/tabs';
import { HomePage    } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { RoastsPage  } from '../pages/roasts/roasts';
import { MapPage     } from '../pages/map/map';
import { StatsPage   } from '../pages/stats/stats';

// Modals
import { AddCupModal   } from '../pages/add-cup/add-cup';
import { AddRoastModal } from '../pages/add-roast/add-roast';

// Services
import { Storage } from '@ionic/storage';
import { Data    } from '../providers/data';


// Models
import { CupModel      } from '../models/cup';
import { RoastModel    } from '../models/roast';
import { RoasterModel  } from '../models/roaster';
import { LocationModel } from '../models/location';


@NgModule({
  declarations: [
    MyApp,
    
    TabsPage,
    HomePage,
    HistoryPage,
    RoastsPage,
    MapPage,
    StatsPage,

    AddCupModal,
    AddRoastModal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    TabsPage,
    HomePage,
    HistoryPage,
    RoastsPage,
    MapPage,
    StatsPage,
    
    AddCupModal,
    AddRoastModal
  ],
  providers: [Storage, Data]
})
export class AppModule {}
