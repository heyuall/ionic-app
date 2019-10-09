import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SignInPage} from "../sign-in/sign-in";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
fct_login(){
    this.navCtrl.push(LoginPage)
}
  fct_sign_in(){
    this.navCtrl.push(SignInPage)
}

}

