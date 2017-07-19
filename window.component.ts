import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input() width: number = 600;
  @Input() height:number = 400;


  @Input() top: number = 200;
  @Input() left: number = 200;

  @Input() windowName:string = 'Window Name';

  @Input() titleBarFlag = true;
  @Input() titleBarFontSize = 24;
  @Input() titleBarHeight = 30;


  @Input() zindex = 80;

  dragFlag = false;
  windowMouseEnterFlag = false;
  windowMouseDownFlag = false;
  windoMouseLeaveFlag = true;
  
  clickedX: number;
  clickedY: number;

  mouseEvent: MouseEvent;

  mouseEntered: MouseEvent;

  borderWidth = 10;
  cornerwidth = 10;

  cursorStyle = 'grab';
  visibility = 'visible'

  isLeftBorder: boolean;
  isRightBorder: boolean;
  isTopBorder: boolean;
  isBottomBorder: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.windowName);
  }


  window: any;



  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.mouseEvent = event;
    if (this.dragFlag) {
      this.top = event.clientY - this.clickedY;
      this.left = event.clientX - this.clickedX;
    }

    if(this.windowMouseDownFlag){
      console.log(event);
      this.resizeWidnow(event);
    }

    let x = event.clientX;
    let y = event.clientY;

    let leftBorderX = Math.abs(this.left - x) <= this.borderWidth
    let rightBorderX = Math.abs(this.left+this.width - x) <= this.borderWidth
    let rightLeftBorderY = (y > this.top) && ( y < (this.top + this.height));


    let topBorderY = Math.abs(this.top - y) <= this.borderWidth;
    let bottomBorderY = Math.abs(this.top+this.height - y) <= this.borderWidth;
    let topBottomBorderX = x > this.left && x < this.left + this.width;

    if(leftBorderX && bottomBorderY ){
      this.cursorStyle = 'sw-resize';
      this.isLeftBorder = true;
      this.isBottomBorder = true;
    }else if(rightBorderX && bottomBorderY ){
      this.cursorStyle = 'se-resize';
      this.isRightBorder = true;
      this.isBottomBorder = true;
    }else if(leftBorderX && topBorderY ){
      this.cursorStyle = 'nw-resize';
      this.isLeftBorder = true;
      this.isTopBorder = true;
    }else if(rightBorderX && topBorderY ){
      this.cursorStyle = 'ne-resize';
      this.isTopBorder = true;
      this.isRightBorder = true;
    }else if(leftBorderX && rightLeftBorderY){
      this.cursorStyle = 'e-resize';
      this.isLeftBorder = true;
    }else if(rightBorderX && rightLeftBorderY){
      this.cursorStyle = 'e-resize';
      this.isRightBorder = true;
    }else if(topBorderY && topBottomBorderX){
      this.cursorStyle = 'n-resize';
      this.isTopBorder = true;
    }else if(bottomBorderY && topBottomBorderX){
      this.cursorStyle = 'n-resize';
      this.isBottomBorder = true;
    }
    else{
      this.isLeftBorder = false;
      this.isRightBorder = false;
      this.isTopBorder = false;
      this.isBottomBorder = false;
      this.cursorStyle = 'auto';
    }

  }

  resizeWidnow(event: MouseEvent){
    if(this.dragFlag) return;
    if(this.isLeftBorder){
      let r = this.left + this.width;
      this.left = event.clientX;
      this.width = r - this.left;
    }
    if(this.isRightBorder){
      let r = this.left + this.width;
      this.width += event.clientX - r;
    }
    if(this.isTopBorder){
      let b = this.top + this.height;
      this.top = event.clientY;
      this.height = b - this.top;
    }
    if(this.isBottomBorder){
      let b = this.top + this.height;
      this.height += event.clientY - b;
    }
  }

  titleBarMouseDown(event: MouseEvent) {
    this.dragFlag = true;
    this.clickedX = event.clientX - this.left;
    this.clickedY = event.clientY - this.top;
  }

  @HostListener('document:mouseup', ['$event']) titleBarMouseUp(event: MouseEvent) {
    this.dragFlag = false;
    this.windowMouseDownFlag = false;

    if(this.windoMouseLeaveFlag){
      this.zindex = 80;
    }
  }

  windowMouseEnter(event: MouseEvent){
    this.mouseEntered = event;
    this.windowMouseEnterFlag = true;
    this.windoMouseLeaveFlag = false;
  }

  windowMouseDown(event: MouseEvent){
    this.windowMouseDownFlag = true;

    if(this.windowMouseDownFlag && this.windowMouseEnterFlag){
      this.zindex = 99;
    }
  }

  windowMouseLeave(event:MouseEvent){
    this.windoMouseLeaveFlag = true;
    this.windowMouseEnterFlag = false;
  }

  close(){
    this.visibility = 'hidden'
  }

  maximize(){
    this.top = 0;
    this.left = 0;
    this.height = window.screen.height;
    this.width = window.screen.width;
  }

}
