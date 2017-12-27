import { CommonNounPage } from './../common-noun/common-noun';
import { ImproperNounPage } from './../improper-noun/improper-noun';
import { TypesPage } from './../types/types';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountableNounPage } from '../countable-noun/countable-noun';
import { UncountableNounPage } from '../uncountable-noun/uncountable-noun';

/**
 * Generated class for the TypeNounPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-noun',
  templateUrl: 'type-noun.html',
})
export class TypeNounPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeNounPage');
  }

  items = [
    'Proper Noun',
    'Material Noun',
    'Common Noun',
    'Countable Noun',
    'Uncountable Noun',
    
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);

    if(item =='Proper Noun'){
      
        this.navCtrl.push(TypesPage);
      
    }
    else 
    if (item =='Material Noun'){
      this.navCtrl.push(ImproperNounPage);
    }

    else 
    if (item =='Common Noun'){
      this.navCtrl.push(CommonNounPage);
    }

    else 
    if (item =='Countable Noun'){
      this.navCtrl.push(CountableNounPage);
    }

    else 
    {
      this.navCtrl.push(UncountableNounPage);
    }
  }
 

   

  Ontype(){
    this.navCtrl.push(TypesPage);
  }


}
