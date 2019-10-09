import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {LocalNotifications} from '@ionic-native/local-notifications';
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  username: any;
   resultat :any = [];
  id: any;

  constructor(public api: ApiProvider, localnotification: LocalNotifications, public navCtrl: NavController) {
    this.id = localStorage.getItem("id");

    this.getusernameid()
    //****//

  }

 /* doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
*/


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  getusernameid() {
    this.api.getUserid(this.id).then(data => {
      this.username = JSON.parse(JSON.stringify(data)).username
      console.log('this is ' + (JSON.stringify(data)))
      console.log("brought: " + this.username)
    })
  }

  /*  Logout() {
      this.username = "";
      this.navCtrl.push(HomePage)
    }*/
gethistorique(){
  this.api.gethistorique().then(data =>{
    this.resultat = JSON.parse(JSON.stringify(data))
    //console.log('this is ' + (JSON.stringify(data)))
    console.log(this.resultat)
    console.log(this.resultat[0].username);
    this.username = this.resultat[0].username
  })
}

}


