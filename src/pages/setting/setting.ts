import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage  {
   
  itemName;
  data;
  text;
  number;
  selectedItem;
  selectRadio;
  selectToggle = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataProvider: DataProvider,public toastCtrl: ToastController) {
     this.itemName = this.navParams.get('item');

     this.dataProvider.getSettingsData().subscribe(data=>{
       this.data = data;
       console.log(this.data);
     })
     
  }


  onEvent(e){
    if(e=='formSubmit'){
      console.log(this.text,this.number,this.selectedItem,this.selectRadio,this.selectToggle);
      let data = {

        text: this.text,
        number: this.number,
        selectedItem: this.selectedItem,
        selectRadio: this.selectRadio,
        selectToggle: this.selectToggle


      }
      this.dataProvider.saveSettings(data).subscribe(data=>{
        this.presentToast("Settings Saved");
        this.resetForm();
       
      },err=>{
          this.presentToast("Server error occured");
          this.resetForm();
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListitemPage');
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.present();
  }

  resetForm(){
    this.text= "",
    this.number="",
    this.selectedItem="",
    this.selectRadio="",
    this.selectToggle= false;
  }

}
