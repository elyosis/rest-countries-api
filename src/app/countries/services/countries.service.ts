import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { CountriesStore } from '../interfaces/countriesStore.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1/";

  countriesStore: CountriesStore = {
    countries: [],
    query: "",
    selectedRegion: "all"
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem("countriesStore", JSON.stringify(this.countriesStore));
  }

  private loadFromLocalStorage(): void {
    const countriesStore = localStorage.getItem("countriesStore");

    if (countriesStore) {
      this.countriesStore = JSON.parse(countriesStore);
    } else {
      return;
    }
  }

  sendRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountries(): Observable<Country[]> {
    const url = `${this.apiUrl}/all`;
    return this.sendRequest(url).pipe(
      tap((countries) => {
        this.countriesStore.countries = countries;
      }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountryByName(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.sendRequest(url).pipe(
      tap((countries) => {
        this.countriesStore.countries = countries;
        this.countriesStore.query = query
      }),
      tap(() => this.saveToLocalStorage())
    );;
  }

  searchCountryByCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null)));
  }
}
