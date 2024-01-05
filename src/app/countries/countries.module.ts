import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegionSelectComponent } from './components/region-select/region-select.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    HomePageComponent,
    RegionSelectComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CountriesModule { }
