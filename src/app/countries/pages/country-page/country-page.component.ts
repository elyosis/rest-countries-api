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
  isLoading: boolean = false;

  constructor(private router: Router, private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.countriesService.searchCountryByCode(this.code).subscribe((country) => {
      if (!country) {
        this.isLoading = false;
        return this.router.navigateByUrl("")
      };
      this.isLoading = false;
      return this.country = country;
    })
  }
}
