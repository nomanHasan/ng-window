import { DesktopComponent } from './desktop/desktop.component';
import { ProgramComponent } from './program/program.component';
import { MenuComponent } from './menu/menu.component';
import { TaskComponent } from './task/task.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WindowComponent,
    TaskbarComponent,
    TaskComponent,
    MenuComponent,
    ProgramComponent,
    DesktopComponent
  ],
  exports: [
    WindowComponent,
    TaskbarComponent,
    TaskComponent,
    MenuComponent,
    ProgramComponent,
    DesktopComponent
  ]
})
export class WindowModule { }
