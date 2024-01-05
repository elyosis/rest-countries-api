import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegionSelectComponent } from './components/region-select/region-select.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    RegionSelectComponent,
    SearchBarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CountriesModule { }
