import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.langForm = new FormGroup({
      "langs": new FormControl({ value: 'rust', disabled: false })
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

  radioChecked(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');
  }



}
