import {Component, Input} from '@angular/core';
import {NavController, IONIC_DIRECTIVES,Alert} from 'ionic-angular';
import {Data} from '../../providers/data/data';
import {Lib} from '../../providers/lib/lib';

@Component({
    templateUrl: 'build/pages/student-completed/student-completed.html',
    selector: 'student-completed',
    directives: [IONIC_DIRECTIVES]
})
export class StudentCompletedPage {
    @Input() assignment: string;
    @Input() response: {};
    @Input() email: string;
    @Input() studentGrade:string;
    @Input() classSelected:string;
    @Input() chapterSelected:string;

    assignment_dict = {};
    chapter_assignments = [];
    assignment_url:string;
    cumulative_rating;
    constructor(private nav:NavController,private dataService:Data, private lib: Lib) {

    }

    ngOnInit(){
      this.dataService.getAssignments(this.studentGrade+"_"+this.classSelected, this.chapterSelected).then((assignmentsInfo) => {
        if (assignmentsInfo) {
          this.chapter_assignments = assignmentsInfo["assignments"];
              this.assignment_dict[this.assignment] = {};
              this.assignment_dict[this.assignment]["teacher_reviewed"] = [];
              this.assignment_dict[this.assignment]["responses"] = {};

            this.dataService.getAssignmentInfo(this.assignment).then((assignmentDetail_info) => {
                if (assignmentDetail_info) {
                    this.assignment_dict[this.assignment] = {};
                    this.assignment_dict[this.assignment] ["teacher_reviewed"] = assignmentDetail_info["teacher_reviewed"];
                    this.assignment_dict[this.assignment] ["responses"] = assignmentDetail_info["responses"];
                    console.log(this.assignment_dict);
                    this.assignment_url = this.assignment_dict[this.assignment] ["responses"][this.email]["attachmentUrl"];
                    this.cumulative_rating = this.assignment_dict[this.assignment] ["responses"][this.email]["cumulative_rating"];
                    console.log(this.assignment_dict[this.assignment] ["responses"][this.email]["cumulative_rating"]);
                }
            }).catch(function(exception){
              console.log(exception);
            });
        }
      });
    }

    doAlert() {
        let alert = Alert.create({
        title: 'My Rating',
        subTitle: this.assignment_url,
        buttons: ['OK']
      });
      this.nav.present(alert);
  }
}
