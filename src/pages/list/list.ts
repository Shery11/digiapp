import { DataProvider } from './../../providers/data/data';
import { Component, Input, ViewChild } from '@angular/core';
import { Content, ActionSheetController, NavController, ToastController } from 'ionic-angular';
import { ListitemPage } from '../listitem/listitem';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  slider = {};

  constructor(public toastCtrl: ToastController,  public actionSheetCtrl: ActionSheetController,public navCtrl: NavController,public dataProvider: DataProvider) { 
    this.dataProvider.getListData().subscribe(data=>{
      this.data = data;
    })
  }
 
 
  slideHasChanged(slider, index): void {
      this.slider[index] = slider;
      if (2 == slider._activeIndex) {
          if (this.data.items) {
              this.data.items.splice(index, 1);
          } else {
              this.data.splice(index, 1);
          }
      }
  }

  onClickEvent(index): void {
      if (this.slider[index]) {
          this.slider[index].slidePrev(300);
      }
  }

  onEvent(event: string, item: any, e: any) {
   

    if(event == 'onItemClick'){
      // this is where we will navigate to next page
      console.log(item);

      this.navCtrl.push(ListitemPage,{item:item});
    }
     
  }

  presentActionSheet(item, index) {
      var that = this;
      console.log(item)
      this.data.actionSheet.buttons.forEach(element => {

        console.log(element);
          element["handler"] = function () {
               that.toastCtrl.create({
                message: element.text,
                duration: 2000,
                position: 'bottom'
              }).present();
          }
      });
      const actionSheet = this.actionSheetCtrl.create(this.data.actionSheet);
      actionSheet.present();
  }
}
