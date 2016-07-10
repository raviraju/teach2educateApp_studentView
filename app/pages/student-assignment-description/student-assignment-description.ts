import {Component} from '@angular/core';
import {Modal, Platform, NavController, NavParams, ViewController,Page} from 'ionic-angular';

/*
  Generated class for the StudentAssignmentDescriptionPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/student-assignment-description/student-assignment-description.html',
})
export class StudentAssignmentDescriptionPage {
   assignmentSelected:string;

  constructor(public nav: NavController,public platform: Platform,public params: NavParams,public viewCtrl: ViewController){
    this.assignmentSelected = this.params.get('assignmentSelected');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
