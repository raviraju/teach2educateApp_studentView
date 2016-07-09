import {Component} from '@angular/core';
import {Modal, Platform, NavController, NavParams, ViewController} from 'ionic-angular';

/*
  Generated class for the StudentAssignmentDescriptionPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/student-assignment-description/student-assignment-description.html',
})
export class StudentAssignmentDescriptionPage {
  character;

  constructor(public nav: NavController,
              public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController)
              {
                var characters = [
                  {
                    name: 'Gollum',
                    quote: 'Sneaky little hobbitses!',
                    image: 'img/avatar-gollum.jpg',
                    items: [
                      { title: 'Race', note: 'Hobbit' },
                      { title: 'Culture', note: 'River Folk' },
                      { title: 'Alter Ego', note: 'Smeagol' }
                    ]
                  },
                  {
                    name: 'Frodo',
                    quote: 'Go back, Sam! I\'m going to Mordor alone!',
                    image: 'img/avatar-frodo.jpg',
                    items: [
                      { title: 'Race', note: 'Hobbit' },
                      { title: 'Culture', note: 'Shire Folk' },
                      { title: 'Weapon', note: 'Sting' }
                    ]
                  },
                  {
                    name: 'Samwise Gamgee',
                    quote: 'What we need is a few good taters.',
                    image: 'img/avatar-samwise.jpg',
                    items: [
                      { title: 'Race', note: 'Hobbit' },
                      { title: 'Culture', note: 'Shire Folk' },
                      { title: 'Nickname', note: 'Sam' }
                    ]
                  }
                ];
                this.character = characters[this.params.get('charNum')];
          }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
