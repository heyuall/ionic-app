import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {WelcomePage} from "../welcome/welcome";
import {FormGroup, Validators} from '@angular/forms';
import {ApiProvider} from "../../providers/api/api";
import {MyApp} from "../../app/app.component";
import {ModalController} from "ionic-angular";
import {FormBuilder} from "@angular/forms";
import {AlertController} from "ionic-angular";
//**//

import {Platform} from 'ionic-angular';
import {LocalNotifications} from '@ionic-native/local-notifications';
import {DateTime} from "ionic-angular/umd";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {
  users: any;
  shit: FormGroup;


  constructor(public toastCtrl: ToastController, public localNotifications: LocalNotifications, public platform: Platform, private alertCtrl: AlertController, public navCtrl: NavController, public formBuilder: FormBuilder, public api: ApiProvider) {
    this.shit = formBuilder.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });
  }


  getUsers() {
    console.log(this.shit.get('username').value);
    console.log(this.shit.get('password').value);
    this.api.getUsersl(this.shit.get('username').value, this.shit.get('password').value).then(data => {
      if ((data.toString()).length != 0) {
        this.users = data;
        console.log(data)
        console.log(data[0]._id)
        localStorage.setItem("id", data[0]._id)

        //$$//
        //var date = new Date();
        var date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        this.localNotifications.schedule({
          text: 'Delayed ILocalNotification',
         // at: new Date(),
          led: 'FF0000',
          sound: this.setSound(),
        });

        /* let alert = this.alertCtrl.create({
           title: 'HELLO!',
           subTitle: 'Logged in successfully at ' + date,
           //delay:3000,
         });
         alert.present();*/


        //$$//

        //$$//

        this.navCtrl.push(WelcomePage);

        const toast = this.toastCtrl.create({
          message: 'logged in successfully at: ' + date,
          duration: 3000,
          position: 'center'
        });
        toast.present();
        /////////////////////////////////////////////////
      } else {

        let alert = this.alertCtrl.create({
          title: 'Wrong Input ',
          subTitle: 'please check your information',
          buttons: ['ok']
        });
        alert.present();
      }

      console.log(this.users);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  fct_log_in() {
    this.navCtrl.push(WelcomePage);
  }

  setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/Rooster.mp3'
    } else {
      return 'file://assets/sounds/Rooster.caf'
    }
  }

  /* showToast(p : string){
     const toast = this.toastCtrl.create({
       message: 'User was added successfully',
       duration: 3000,
       position : p
     });
     toast.present( toast);
   }*/

  /*ngOnInit(): void {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)])
    });
}*/

}
