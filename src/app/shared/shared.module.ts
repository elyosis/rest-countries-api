import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { DisplayPipe } from './pipes/display.pipe';
import { BackButtonComponent } from './components/button/back-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    DisplayPipe,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, BackButtonComponent, DisplayPipe]
})
export class SharedModule { }
