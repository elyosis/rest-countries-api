import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, AfterViewInit, OnDestroy {
  private debouncer = new Subject<string>();
  private debounceSubscription = new Subscription();
  @Output() onSearch = new EventEmitter();
  @ViewChild("countrySearchInput")
  countrySearchInput!: ElementRef<HTMLInputElement>

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.debounceSubscription = this.debouncer.pipe(
      debounceTime(300)
    )
      .subscribe(query => this.onSearch.emit(query))
  }

  ngAfterViewInit(): void {
    if (this.countriesService.countriesStore.query !== "") {
      this.countrySearchInput.nativeElement.value = this.countriesService.countriesStore.query;
    }
  }

  ngOnDestroy(): void {
    this.debounceSubscription.unsubscribe();
  }

  logSearch(query: string) {
    this.debouncer.next(query);
  }
}
