import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {AboutUsPage} from "../pages/about-us/about-us"
import {SignInPage} from "../pages/sign-in/sign-in";
import {WelcomePage} from "../pages/welcome/welcome";
import { ApiProvider } from '../providers/api/api';
import {HttpClientModule} from "@angular/common/http"
import {LocalNotifications} from "@ionic-native/local-notifications";
import {SevicesPage} from "../pages/sevices/sevices";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignInPage,
    WelcomePage,
    AboutUsPage,
    SevicesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignInPage,
    WelcomePage,
    AboutUsPage,SevicesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications
  ]
})
export class AppModule {}
