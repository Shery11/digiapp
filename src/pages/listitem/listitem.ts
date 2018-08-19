import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listitem',
  templateUrl: 'listitem.html',
})
export class ListitemPage {
   
  itemName;
  data;
  text;
  number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataProvider: DataProvider) {
     this.itemName = this.navParams.get('item');

     this.dataProvider.getListItemData().subscribe(data=>{
       this.data = data;
       console.log(this.data);
     })
     
  }


  onEvent(e){
    if(e=='formSubmit'){
      alert("form submit")
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListitemPage');
  }

}
