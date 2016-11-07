import { Component } from '@angular/core';

import { HomePage }    from '../home/home';
import { AboutPage }   from '../about/about';
import { RoastsPage }  from '../roasts/roasts';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = RoastsPage;
  tab4Root: any = RoastsPage;
  tab5Root: any = RoastsPage;

  constructor() {

  }
}
