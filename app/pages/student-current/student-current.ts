import {Page, Alert, NavController, NavParams, Toast} from 'ionic-angular';
import {Data} from '../../providers/data/data';
import {Lib} from '../../providers/lib/lib';
import {StudentUploadPage} from "../student-upload/student-upload";

@Page({
    templateUrl: 'build/pages/student-upload/student-upload.html',
})
class UploadDetailsPage {
    item;

    constructor(params: NavParams) {
        this.item = params.data.item;
    }
}

@Page({
  templateUrl: 'build/pages/student-current/student-current.html',
})
export class StudentCurrentPage {
  items = [];
  chapters = [];
  classSelected: string;
  chapter_assignments = {};
  constructor(public nav: NavController, navParams: NavParams, private dataService: Data, private lib: Lib){
      this.classSelected = navParams.data.className;
      console.log(this.classSelected);
  }

  ionViewWillEnter(){
    this.chapters = [];
    this.chapter_assignments = {};
    this.dataService.getChapters(this.classSelected).then((classInfo) => {
      if(classInfo){
        for(let chapter in classInfo["chapters"]){
          this.chapters.push(chapter);
          this.chapter_assignments[chapter] = classInfo["chapters"][chapter]["assignments"];
        }
        console.log(this.chapter_assignments);
    }
    })
  }

  keys() : Array<string> {
    return Object.keys(this.chapters);
  }

  openAssignmentDetailsPage(chapterTitle){
     this.nav.push(StudentUploadPage, {chapter: chapterTitle})
     console.log(chapterTitle);
  }
}
