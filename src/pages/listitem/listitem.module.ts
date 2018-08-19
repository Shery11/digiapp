import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListitemPage } from './listitem';

@NgModule({
  declarations: [
    ListitemPage,
  ],
  imports: [
    IonicPageModule.forChild(ListitemPage),
  ],
})
export class ListitemPageModule {}
