import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { Newsfeed } from '../pages/newsfeed/newsfeed';
import { EventPage } from '../pages/eventpage/event-page';
import { ClubSelector } from '../pages/clubselector/clubselector';
import { ClubPage } from '../pages/clubpage/clubpage';
import { LoginPage } from '../pages/login/login';
import { DiscountPage } from '../pages/discount/discount';
import { PersonalInfo } from '../pages/personalinfo/personal-info';
import { LocalData } from '../providers/LocalData';
import { CacheService } from '../providers/CacheService';
import {Storage} from '@ionic/Storage';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Newsfeed,
    EventPage,
    ClubSelector,
    ClubPage,
    LoginPage,
    DiscountPage,
    PersonalInfo,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Newsfeed,
    EventPage,
    ClubSelector,
    ClubPage,
    LoginPage,
    DiscountPage,
    PersonalInfo,
  ],
  providers: [LocalData,CacheService,Storage]
})
export class AppModule {}
