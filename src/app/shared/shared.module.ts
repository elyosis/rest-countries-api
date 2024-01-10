import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { BackButtonComponent } from './components/button/back-button.component';

import { DisplayPipe } from './pipes/display.pipe';
import { HideDropdownDirective } from './directives/hide-dropdown.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    DisplayPipe,
    BackButtonComponent,
    HideDropdownDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, BackButtonComponent, DisplayPipe, HideDropdownDirective]
})
export class SharedModule { }
