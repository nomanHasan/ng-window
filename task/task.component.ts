import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() width = 50;
  @Input() fontSize = 40;

  @Output('onClick') clientEE = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }


  onClick(){
    this.clientEE.emit(true); 
  }


}
