import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountableNounPage } from './countable-noun';

@NgModule({
  declarations: [
    CountableNounPage,
  ],
  imports: [
    IonicPageModule.forChild(CountableNounPage),
  ],
})
export class CountableNounPageModule {}
