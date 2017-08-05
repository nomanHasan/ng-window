import { WindowComponent } from '../window/window.component';
import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {


  visibility = 'hidden';

  windowName = 'ngx-window'

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainer: ViewContainerRef) { }

  ngOnInit() {
  }

  clickStartButton(event:boolean){
    this.visibility = this.visibility == 'hidden' ? 'visible' : 'hidden'
  }

  clickProgram(event: boolean){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(WindowComponent);
    const component = this.viewContainer.createComponent(componentFactory);

    component.changeDetectorRef.detectChanges();
  }
}
