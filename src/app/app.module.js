var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { InterestSelector } from '../pages/interest-selector/interest-selector';
import { Hiring } from '../pages/hiring/hiring';
//Providers
import { LocalData } from '../providers/LocalData';
import { LocalStorage } from '../providers/LocalStorage';
import { CacheService } from '../providers/CacheService';
//import { NetworkService } from '../providers/NetworkService';
//Pipes
import { MapToIterablePipe } from '../pipes/MapToIterablePipe';
import { GetLongDate } from '../pipes/GetLongDate';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            IonicModule.forRoot(MyApp, {
                mode: 'md',
                iconMode: 'ios'
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
        providers: [LocalData, CacheService, LocalStorage, Calendar, Network]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map