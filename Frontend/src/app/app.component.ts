import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MEAN';
  postList;
  constructor() {
    this.postList = [
      {
        _id: 1,
        title: 'First',
        link: 'www.test.com',
        votes: 85,
      },
      {
        _id: 2,
        title: 'second',
        link: 'www.test1.com',
        votes: 11,
      },
    ];
  }
}
