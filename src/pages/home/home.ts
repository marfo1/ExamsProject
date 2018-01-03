//import { Platform } from 'ionic-angular';

//import { HomePage } from './home';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AboutPage } from '../about/about';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
//firstPage:any ;
  constructor(public navCtrl: NavController,public toastCtrl:ToastController,public alerCtrl:AlertController) {
    
 }



  tutorial(){
    //this.firstPage= "TutoriaPage"
    this.navCtrl.push("TutorialPage");
  }
  //ToExit(position:string){
   // let toast = this.toastCtrl.create({
    //   message:'To us this application First Click on deffinition of Noun and learn '
      // showCloseButton: true,
      // closeButtonText: 'Ok'
   // })
   
  

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'To use this application First Click on the Next button , click on deffinition of Noun and learn',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

    //to alert the user to exit

    doConfirm() {
      let confirm = this.alerCtrl.create({
        title: 'Exit',
        message: 'Do you want to Exit',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log();
            }
          },
          {
            text: 'Yes',
            handler: () => {
             this.navCtrl.push(AboutPage);
            //  console.log();
            }
          }
        ]
      });
      confirm.present()
    }
  
  }




