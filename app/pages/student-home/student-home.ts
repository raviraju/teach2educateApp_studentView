import {Page, Alert, NavController, NavParams, Toast} from 'ionic-angular';
import {Data} from '../../providers/data/data';
import {Lib} from '../../providers/lib/lib';
import {StudentCurrentPage} from "../student-current/student-current";

@Page({
    templateUrl: 'build/pages/student-current/student-current.html',
})
class CurrentDetailsPage {
    item;

    constructor(params: NavParams) {
        this.item = params.data.item;
    }
}

@Page({
  templateUrl: 'build/pages/student-home/student-home.html',
})
export class StudentHomePage {
  email: string;
  class: string;//Selected Class Name
  root: string;
  items = []; //Classes
  chapters = [];//Chapters for a class
  constructor(public nav: NavController, navParams: NavParams, private dataService: Data, private lib: Lib) {
    this.email = navParams.get('uname');
    this.root = "courses";
  }

  ionViewWillEnter(){
    this.dataService.getUserInfo(this.email).then((userInfo) => {
      if(userInfo){
        this.items = userInfo["subjects"];
      }
    })
  }

  setChapters(){
    this.dataService.getChapters(this.class).then((chapterInfo) => {
      if(chapterInfo){
        this.chapters = chapterInfo["class"];
        console.log(chapterInfo);
      }
    })
  }

  openChapterDetailsPage(className){
      this.nav.push(StudentCurrentPage, { className: className, chapters: this.chapters });
  }
}
