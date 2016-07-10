import {Page, Alert, Toast} from 'ionic-angular';
import {Data} from '../../providers/data/data';
import {Lib} from '../../providers/lib/lib';
import {Component} from '@angular/core';
import {Modal, Platform, NavController, NavParams, ViewController} from 'ionic-angular';
import {StudentAssignmentDescriptionPage} from "../student-assignment-description/student-assignment-description";
import {StudentCompletedPage} from '../student-completed/student-completed';


@Component({
  templateUrl: 'build/pages/student-upload/student-upload.html'
})

export class StudentUploadPage {
  chapterSelected: string;
  assignments:string; //To set default tab as Upload
  assignment_dict = {};
  chapter_assignments = [];
  classSelected:string;
  student_grade:string;

  constructor(public nav: NavController, navParams: NavParams, private dataService: Data, private lib: Lib){
    this.chapterSelected = navParams.data.chapter;
    this.student_grade = navParams.data.studentGrade;
    this.classSelected = navParams.data.class;
    this.assignments = "upload";
  }

  ionViewWillEnter(){
    this.dataService.getAssignments(this.student_grade+"_"+this.classSelected, this.chapterSelected).then((assignmentsInfo) => {
      if (assignmentsInfo) {
        this.chapter_assignments = assignmentsInfo["assignments"];
        for(let assignment of this.chapter_assignments){
            this.assignment_dict[assignment] = {};
            this.assignment_dict[assignment]["description"] = "default";
            this.assignment_dict[assignment]["max_response_duration_min"] = 0;
            this.assignment_dict[assignment]["assigned_on"] = "default";
            this.assignment_dict[assignment]["soft_deadline_due"] = "default";
            this.assignment_dict[assignment]["hard_deadline_due"] = "default";
            this.assignment_dict[assignment]["teacher_reviewed"] = [];
            this.assignment_dict[assignment]["no_of_assignments_reviewed"] = 0;
            this.assignment_dict[assignment]["teacher_yet_to_review"] = [];
            this.assignment_dict[assignment]["no_of_assignments_to_review"] = 0;
        }
        for(let assign of this.chapter_assignments){
          this.dataService.getAssignmentInfo(assign).then((assignmentDetail_info) => {
              if (assignmentDetail_info) {
                  this.assignment_dict[assign] = {};
                  this.assignment_dict[assign] ["description"] = assignmentDetail_info["description"];
                  this.assignment_dict[assign] ["max_response_duration_min"] = assignmentDetail_info["max_response_duration_min"];
                  this.assignment_dict[assign] ["assigned_on"] = assignmentDetail_info["assigned_on"];
                  this.assignment_dict[assign] ["soft_deadline_due"] = assignmentDetail_info["soft_deadline_due"];
                  this.assignment_dict[assign] ["hard_deadline_due"] = assignmentDetail_info["hard_deadline_due"];
                  this.assignment_dict[assign] ["teacher_reviewed"] = assignmentDetail_info["teacher_reviewed"];
                  this.assignment_dict[assign] ["teacher_yet_to_review"] = assignmentDetail_info["teacher_yet_to_review"];
                  this.assignment_dict[assign] ["no_of_assignments_reviewed"] = assignmentDetail_info["teacher_reviewed"].length;
                  this.assignment_dict[assign] ["no_of_assignments_to_review"] = assignmentDetail_info["teacher_yet_to_review"].length;
                  console.log(this.assignment_dict);
              }
          }).catch(function(exception){
            console.log(exception);
          });
      }
      }
    });
 }

  doAlert(assignmentSelected) {
      let alert = Alert.create({
      title: 'Description',
      subTitle: this.assignment_dict[assignmentSelected]["description"],
      buttons: ['OK']
    });
    this.nav.present(alert);
}
}
