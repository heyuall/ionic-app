import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {FormGroup, Validators} from '@angular/forms';
import {WelcomePage} from "../welcome/welcome";
import {ValidatorFn} from "@angular/forms";
import {AbstractControl} from "@angular/forms";
import {AlertController} from "ionic-angular";
import {ApiProvider} from "../../providers/api/api";
import {FormBuilder} from "@angular/forms";


/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',

})
export class SignInPage {
  user: { username: '', email: '', password: '' };
  signupform: FormGroup;


  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public formBuilder: FormBuilder, public api: ApiProvider) {
    this.signupform = formBuilder.group({
      'username': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      'password': ['', Validators.compose([Validators.required])],
      'password2': ['', Validators.compose([Validators.required, this.equalto('password')],)]

    });
  }

  //************

  fct_sign_in2() {
    this.navCtrl.push(WelcomePage);
  }

  savesignup() {
    console.log(this.signupform.get("username").value);
    console.log(this.signupform.get("email").value);
    console.log(this.signupform.get("password").value);

    const data = {
      "email": this.signupform.get("email").value,
      "username": (this.signupform.get("username").value),
      "password": (this.signupform.get("password").value)
    }
    this.api.postsignupl(data).then((result) => {
      if (result.toString().length == 0) {
        let alert = this.alertCtrl.create({
          title: 'already exists',
          subTitle: 'please check information',
          buttons: ['ok']
        });
        alert.present();
      } else {
        console.log("résultat 1: "+data.username);
        localStorage.setItem("id",data.username);
        this.fct_sign_in2();
      }


    }, (err) => {
      console.log(err);
    });
  }

  //*******************


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  equalto(field_name)
    :
    ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      let input = control.value;

      let isValid = control.root.value[field_name] == input
      if (!isValid) {
        return {'equalTo': {isValid}}
      }

    };
  }


  /*ngOnInit(){


    this.signupform = new FormGroup({
      username: new FormControl('', [Validators.required, , Validators.minLength(2), Validators.maxLength(30)]),
      password2: new FormControl('', [Validators.required, this.equalto('password')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required])
    })


  }*/

}
