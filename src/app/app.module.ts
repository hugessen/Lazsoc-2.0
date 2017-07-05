  //Ionic Components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { Calendar } from '@ionic-native/Calendar';
import { Network } from '@ionic-native/Network';

//Pages
import { TabsPage } from '../pages/tabs/tabs';
import { Newsfeed } from '../pages/newsfeed/newsfeed';
import { PopoverPage } from '../pages/popover/popover';
import { EventPage } from '../pages/eventpage/event-page';
import { ClubSelector } from '../pages/clubselector/clubselector';
import { ClubPage } from '../pages/clubpage/clubpage';
import { LoginPage } from '../pages/login/login';
import { DiscountPage } from '../pages/discount/discount';
import { PersonalInfo } from '../pages/personalinfo/personal-info';
import { InterestSelector } from '../pages/interest-selector/interest-selector'
import { Hiring } from '../pages/hiring/hiring';

//Providers
import { LocalData } from '../providers/LocalData';
import { LocalStorage } from '../providers/LocalStorage';
import { CacheService } from '../providers/CacheService';
//import { NetworkService } from '../providers/NetworkService';

//Pipes
import { MapToIterablePipe } from '../pipes/MapToIterablePipe';
import { GetLongDate } from '../pipes/GetLongDate';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Newsfeed,
    PopoverPage,
    EventPage,
    ClubSelector,
    ClubPage,
    LoginPage,
    DiscountPage,
    PersonalInfo,
    InterestSelector,
    Hiring,
    MapToIterablePipe,
    GetLongDate
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md',
      iconMode:'ios'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Newsfeed,
    PopoverPage,
    EventPage,
    ClubSelector,
    ClubPage,
    LoginPage,
    DiscountPage,
    PersonalInfo,
    InterestSelector,
    Hiring
  ],
  providers: [LocalData,CacheService,LocalStorage, Calendar, Network]
})
export class AppModule {}
