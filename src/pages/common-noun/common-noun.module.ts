import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonNounPage } from './common-noun';

@NgModule({
  declarations: [
    CommonNounPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonNounPage),
  ],
})
export class CommonNounPageModule {}
