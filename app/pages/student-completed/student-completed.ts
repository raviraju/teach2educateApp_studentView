import {Component} from '@angular/core';
import {NavController, IONIC_DIRECTIVES} from 'ionic-angular';

/*
  Generated class for the StudentCompletedPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/student-completed/student-completed.html',
  selector: 'student-completed',
  directives: [IONIC_DIRECTIVES]
})
export class StudentCompletedPage {
  constructor(public nav: NavController) {}
}
