import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tab, Tabs } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabsPage } from '../pages/tabs/tabs';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabCoursePage } from '../pages/tab-course/tab-course';

@NgModule({
  declarations: [
    MyApp,
    TabHomePage,
    TabArticlePage,
    TabContactPage,
    TabServicePage,
    TabsPage,
    TabCoursePage,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabHomePage,
    TabArticlePage,
    TabContactPage,
    TabServicePage,
    TabsPage,
    TabCoursePage,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }