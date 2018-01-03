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

  radio5() {
    let alert = this.alertCtrl.create({
      title: 'Greet',
      subTitle: 'Your answer is correct!',
      buttons: ['OK']
    });
    alert.present();
  }

  radio6(){
    
      let alert = this.alertCtrl.create({
        title: 'Try Again',
        subTitle: 'You can do better than this',
        buttons: ['OK']
      });
      alert.present();
  }

  radio7() {
    let alert = this.alertCtrl.create({
      title: 'Try Again',
      subTitle: 'Kumasi is a city in Ghana, not the capital of Ghana.!',
      buttons: ['OK']
    });
    alert.present();
  }
  
  radio8(){
    
      let alert = this.alertCtrl.create({
        title: 'Correct',
        subTitle: 'Accra, is the capital of Ghana',
        buttons: ['OK']
      });
      alert.present();
  }

  radio9() {

    let alert = this.alertCtrl.create({
      title: 'Correct',
      subTitle: 'A noun is a name',
      buttons: ['OK']
    });
    alert.present();
  }

  radio10() {
    let alert = this.alertCtrl.create({
      title: 'Try Again',
      subTitle: 'A noun is a name of a person, place animal, thing emotions etc',
      buttons: ['OK']
    });
    alert.present();
  }

  radio11() {

    let alert = this.alertCtrl.create({
      title: 'Correct',
      subTitle: 'keeep the good up',
      buttons: ['OK']
    });
    alert.present();
  }

  radio12() {
    let alert = this.alertCtrl.create({
      title: 'Try Again',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }



}

