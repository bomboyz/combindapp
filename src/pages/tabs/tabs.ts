import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { TabArticlePage } from '../tab-article/tab-article';
import { TabContactPage } from '../tab-contact/tab-contact';
import { TabServicePage } from '../tab-service/tab-service';
import { TabCoursePage } from '../tab-course/tab-course';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any =TabHomePage;
  tab2Root: any =TabCoursePage;
  tab3Root: any =TabContactPage;
  tab4Root: any =TabServicePage;
  tab5Root: any =TabArticlePage;

  // TabCoursePage
  // TabArticlePage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}