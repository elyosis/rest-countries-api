import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  countries: Country[] = [];
  selectedRegion!: Region;
  isLoading: boolean = false;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    if (this.countriesService.countriesStore.countries.length > 0) {
      this.countries = this.countriesService.countriesStore.countries;
      this.selectedRegion = this.countriesService.countriesStore.selectedRegion;
    } else {
      this.isLoading = true;
      this.countriesService.searchCountries().subscribe((countries) => {
        this.countries = countries;
        this.selectedRegion = this.countriesService.countriesStore.selectedRegion;
        this.isLoading = false;
      })
    }

  }

  trackByCode(index: number, country: Country) {
    return country.cca3;
  }

  filterCountries(region: Region): void {
    this.selectedRegion = region;
  }

  searchCountry(country: string): void {
    this.isLoading = true;
    if (country === "") {
      this.countriesService.searchCountries().subscribe(countries => this.countries = countries)
    } else {
      this.countriesService.searchCountryByName(country).subscribe(countries => this.countries = countries);
    }
    this.isLoading = false;
  }
}
