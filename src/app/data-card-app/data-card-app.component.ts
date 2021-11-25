import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-card-app',
  templateUrl: './data-card-app.component.html',
  styleUrls: ['./data-card-app.component.css']
})
export class DataCardAppComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {
  }

  members: { bgcolor: string, color: string, title: string, content: any }[] = [
    { bgcolor: 'mistyrose', color: 'red', title: '24,603,922', content: 'Confirmed' },
    { bgcolor: 'lightgreen', color: 'green', title: '17,073,973', content: 'Recovered' },
    { bgcolor: 'lightgrey', color: 'grey', title: '834,742', content: 'Deaths' }

  ];

}
