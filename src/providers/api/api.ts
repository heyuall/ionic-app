import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  url: string = "http://localhost:2000";

  //url = 'https://jsonplaceholder.typicode.com';
  getUsersl(email, password) {
    return new Promise(resolve => {
      this.http.get(this.url + '/Signup/byusandp' + '/' + email + '/' + password).subscribe(data => {
        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

  /*postsignupl(data) {
    return new Promise(resolve => {
      this.http.get(this.url + "/sign/ADD/").subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        }
      );
    });
  }

}*/
  getUserid(id) {
    return new Promise((resolve => {
      this.http.get(this.url + "/Signup/find/"+ id).subscribe(data => {
        resolve(data);

      }, err=> {
      console.log(err);
      })
    }))
  }

//*****************************//
  postsignupl(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + "/Signup/ADD/", (data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


//**********************************//
  gethistorique() {
    return new Promise((resolve => {
      this.http.get(this.url + "/Historique/all").subscribe(data => {
        resolve(data);

      }, err=> {
        console.log(err);
      })
    }))
  }
}
