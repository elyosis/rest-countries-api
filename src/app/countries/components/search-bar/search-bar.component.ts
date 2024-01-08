import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'countries-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private debouncer = new Subject<string>();
  private debounceSubscription = new Subscription();
  @Output() onSearch = new EventEmitter();

  ngOnInit(): void {
    this.debounceSubscription = this.debouncer.pipe(
      debounceTime(300)
    )
      .subscribe(query => this.onSearch.emit(query))
  }

  ngOnDestroy(): void {
    this.debounceSubscription.unsubscribe();
  }

  logSearch(query: string) {
    this.debouncer.next(query);
  }
}
