import { DataProvider } from './../../providers/data/data';
import { Component,Input, ViewChild } from '@angular/core';
import { NavController,Content, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  active: boolean;
  headerImage:any = "assets/images/background/9.jpg";
  title:any = "Engage real-time";
  subtitle:any = "Startup Pitches";


  constructor(public navCtrl: NavController, public dataProvider : DataProvider,public toastCtrl : ToastController) {
       
    this.dataProvider.getHomeData().subscribe(data=>{
      this.data = data;
      console.log(this.data);
    })
  }



  onEvent(event: string, item: any, e: any) {
      if (e) {
          e.stopPropagation();
      }
      this.toastCtrl.create({
        message: item.title,
        duration: 2000,
        position: 'bottom'
      }).present();
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
      if (changes.data && changes.data.currentValue) {
          this.headerImage = changes.data.currentValue.headerImage;
      } 
      this.subscribeToIonScroll();
  }

  ngAfterViewInit() {
      this.subscribeToIonScroll();
  }

  ngAfterViewChecked() {
      this.subscribeToIonScroll();
  }

  isClassActive() {
      return this.active;
  }

  subscribeToIonScroll() {
      if (this.content != null && this.content.ionScroll != null) {
          this.content.ionScroll.subscribe((d) => {
              if (d.scrollTop < 200 ) {
                  this.active = false;
                  return;
              }
              this.active = true;
          });
      }
  }

}
