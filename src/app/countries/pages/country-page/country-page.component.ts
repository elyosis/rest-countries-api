import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, forkJoin } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  code!: string;
  country!: Country | null;
  borderCountries?: { name: string, code: string }[];
  isLoading: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.route.params.subscribe(params => {
      this.code = params['code'];

      forkJoin([this.countriesService.searchCountryByCode(this.code),
      this.countriesService.sendRequest("https://restcountries.com/v3.1/all").pipe(
        map((countries) => {
          return countries.map(country => { return { name: country.name.common, code: country.cca3 } })
        })
      )]).subscribe((result) => {
        const country = result[0];

        if (!country) {
          return this.router.navigateByUrl("")
        };

        this.country = country;
        this.borderCountries = result[1].filter(country => this.country?.borders?.includes(country.code));
        return;
      })

    })
    this.isLoading = false;
  }
}
