import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  @Input() code!: string;
  country?: Country;

  constructor(private router: Router, private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.searchCountryByCode(this.code).subscribe((country) => {
      if (!country) return this.router.navigateByUrl("");
      return this.country = country;
    })
  }
}
