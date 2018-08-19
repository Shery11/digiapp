import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  URL = 'http://localhost:3000/';	

 // URL = " https://1081c423.ngrok.io/";

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
    	
  }


  getIntroData(){
     return this.http.get(this.URL+'wizard');
  }


  getLoginData(){
    return this.http.get(this.URL+'login');
  }

  getRegisterData(){
    return this.http.get(this.URL+'register');
  }


  getHomeData(){
    return this.http.get(this.URL+'parallax');
  }

  getListData(){
    return this.http.get(this.URL+'googleCards')
  }

  getListItemData(){
    return this.http.get(this.URL+'listItems')
  }

  getSettingsData(){
    return this.http.get(this.URL+'settings')
  }

  registerUser(data){
    return this.http.post(this.URL+'users',data)
  }

  loginUser(){
    return this.http.get(this.URL+'users');
  }

  saveSettings(data){

    return this.http.post(this.URL+'settingsData',data)

  }

  saveListItem(data){

    return this.http.post(this.URL+'listItemData',data)

  }




}
