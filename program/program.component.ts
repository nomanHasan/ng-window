import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  @Input() height = 30;
  @Input() width = 200;

  @Input() bottom = 50; 
  
  @Input() fontSize = 20;

  @Output('onClick') onClickEE = new EventEmitter<boolean>(); 

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.onClickEE.emit(true)
  }

}
