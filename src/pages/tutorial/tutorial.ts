import { ExercisePage } from './../exercise/exercise';
import { VideoPage } from './../video/video';
//import { TypesPage } from './../types/types';

import { DNounPage } from './../d-noun/d-noun';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { TypeNounPage } from '../type-noun/type-noun';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }
      NounDefinition(){
        //this.navCtrl.pop();  it takes u back to the page
        this.navCtrl.push(DNounPage);
       //this.SplashScreen.show();
        //let popover =this.popoverCtrl.create(DNounPage);
        // popover.present();
      }
   
      typesNoun(){
        this.navCtrl.push(TypeNounPage);
      }
      
     video(){
       this.navCtrl.push(VideoPage);
     }

  exercisePage(){
    this.navCtrl.push(ExercisePage);
  }
}
 