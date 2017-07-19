import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WindowComponent],
  exports: [WindowComponent]
})
export class WindowModule { }
