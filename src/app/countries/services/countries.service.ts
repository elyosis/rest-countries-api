import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
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
}
