  //Ionic Components
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { Calendar, Network } from 'ionic-native';

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
    Hiring,
    MapToIterablePipe,
    GetLongDate
  ],
  imports: [
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
    Hiring
  ],
  providers: [LocalData,CacheService,LocalStorage, Calendar, Network]
})
export class AppModule {}
