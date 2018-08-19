import { DataProvider } from './../../providers/data/data';
import { Component,Input } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';





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

  @Input() data: any;
    @Input() events: any;

    public username: string;
    public password: string;

    private isUsernameValid: boolean = true;
    private isPasswordValid: boolean = true;

    constructor(public dataProvider: DataProvider,public navCtrl: NavController,public toastCtrl:ToastController) { 
      this.dataProvider.getLoginData().subscribe(data=>{
        console.log(data);
        this.data = data
      })
    }

    onEvent = (event: string): void => {
        if (event == "onLogin" && this.validate()) {
            this.dataProvider.loginUser().subscribe(data=>{
               console.log(data);
               if(this.checkUser(data,this.username,this.password)){
                this.presentToast("User logged in")
                  this.navCtrl.setRoot(HomePage);
               }else{
                 this.presentToast("Invalid Credentials")
                 
               }
            })
            
        }
        if (event == "onRegister") {
          this.navCtrl.push(RegisterPage);
      }
       
      }

      validate():boolean {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.username ||this.username.length == 0) {
            this.isUsernameValid = false;
        }

        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }
        
        console.log(this.isPasswordValid , this.isUsernameValid)
        return this.isPasswordValid && this.isUsernameValid;
     }



     checkUser(data,username,password):boolean{
       let userFound = false;
       data.forEach(element => {

        if(element.username==username&& element.password == password){
          userFound = true;
        }
             
       });

       return userFound;
     }



     presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'bottom'
      });
    
      toast.present();
    }


}
