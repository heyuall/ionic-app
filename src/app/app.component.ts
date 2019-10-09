import {Platform, Nav} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {timer} from 'rxjs/observable/timer'
import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {SignInPage} from "../pages/sign-in/sign-in";
import {WelcomePage} from "../pages/welcome/welcome"
import {AboutUsPage} from "../pages/about-us/about-us"
import {NavController} from "ionic-angular/umd";
import {SevicesPage} from "../pages/sevices/sevices";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = WelcomePage;
  showSplash = true;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(5000).subscribe(() => this.showSplash = false);

    });
  }

  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);

  }

  goToAbout(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(AboutUsPage);
  }

  goToWelcome(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(SevicesPage);
  }
/*
  pages: Array<{title: string, component: any, openTab? : any}>;
   rootPage1 = 'Choix1Page';
   id : any;
   Username:any;
   constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider) {
     this.pages = [
       { title: 'Choix', component: 'Choix1Page' },

       { title: 'A Props', component: 'AccessoirePage'},
       { title: 'Nos Services', component: 'ServicePage'},
       { title: 'Contact', component: 'ContactPage'}
       //{title :'Log Out' , component: 'HomePage'}


     ];}

   openPage(page) {
     this.nav.setRoot(page.component, { openTab: page.openTab });
   }*/
}

