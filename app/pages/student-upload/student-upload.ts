import {Page, Alert, Toast} from 'ionic-angular';
import {Data} from '../../providers/data/data';
import {Lib} from '../../providers/lib/lib';
import {Component} from '@angular/core';
import {Modal, Platform, NavController, NavParams, ViewController} from 'ionic-angular';
import {StudentAssignmentDescriptionPage} from "../student-assignment-description/student-assignment-description";

@Page({
  templateUrl: 'build/pages/student-upload/student-upload.html',
})
export class StudentUploadPage {
  chapterSelected: string;
  assignments:string; //To set default tab as Upload
  constructor(public nav: NavController, navParams: NavParams, private dataService: Data, private lib: Lib){
    this.chapterSelected = navParams.data.chapter;
    this.assignments = "upload";
  }

  openModal(characterNum) {
    let modal = Modal.create(StudentAssignmentDescriptionPage, characterNum);
    this.nav.present(modal);
}
}
