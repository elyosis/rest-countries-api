import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl: string = "https://restcountries.com/v3.1/";

  constructor(private http: HttpClient) { }

  sendRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountries(): Observable<Country[]> {
    const url = `${this.apiUrl}/all`;
    return this.sendRequest(url);
  }

  searchCountryByName(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.sendRequest(url);
  }

  searchCountryByCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null)));
  }
}
