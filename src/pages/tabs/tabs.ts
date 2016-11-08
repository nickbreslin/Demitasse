import { Component } from '@angular/core';

import { HomePage    } from '../home/home';
import { HistoryPage } from '../history/history';
import { RoastsPage  } from '../roasts/roasts';
import { MapPage     } from '../map/map';
import { StatsPage   } from '../stats/stats';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = HistoryPage;
  tab3Root: any = RoastsPage;
  tab4Root: any = MapPage;
  tab5Root: any = StatsPage;

  constructor() {

  }
}
