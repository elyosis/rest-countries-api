import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './countries/pages/home-page/home-page.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "countries/:code", component: CountryPageComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
