import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-app',
  templateUrl: './server-app.component.html',
  styleUrls: ['./server-app.component.css']
})
export class ServerAppComponent implements OnInit {
 @Input()
  element!: {
    type: string;
    name: string;
    content: string;
  }; 
  constructor() { }

  ngOnInit(): void {
  }

}
