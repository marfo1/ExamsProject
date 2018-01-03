import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {
  FormGroup,
  FormControl

} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {

  langs;
  langForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.langForm = new FormGroup({
      "langs": new FormControl({ value: 'rust', disabled: false })
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

  radio1(){
    
      let alert = this.alertCtrl.create({
        title: 'Try Again',
        subTitle: 'You can do better than this',
        buttons: ['OK']
      });
      alert.present();
  }
  radio2(){
    let alert = this.alertCtrl.create({
      title: 'Greet',
      subTitle: 'Your answer is correct!',
      buttons: ['OK']
    });
    alert.present();
  }
  radio3() {
    let alert = this.alertCtrl.create({
      title: 'Greet',
      subTitle: 'Your answer is correct!',
      buttons: ['OK']
    });
    alert.present();
  }
  radio4(){
    
      let alert = this.alertCtrl.create({
        title: 'Try Again',
        subTitle: 'You can do better than this',
        buttons: ['OK']
      });
      alert.present();
  }
  
  


}

