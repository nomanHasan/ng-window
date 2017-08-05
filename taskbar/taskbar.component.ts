import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {


  @Input() height = 50;

  constructor() { }

  ngOnInit() {
  }

}
