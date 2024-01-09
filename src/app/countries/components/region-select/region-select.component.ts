import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Region } from '../../interfaces/region.type';
import { Subscription } from 'rxjs/internal/Subscription';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-region-select',
  templateUrl: './region-select.component.html',
  styleUrls: ['./region-select.component.css']
})
export class RegionSelectComponent implements OnInit, OnDestroy {
  private debouncer = new Subject<string>();
  private debounceSubscription = new Subscription();

  @Output() changeRegion = new EventEmitter();
  regions: Region[] = ["all", "africa", "americas", "asia", "europe", "oceania"];
  selectedRegion!: Region;

  expanded: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.countriesStore.selectedRegion;
    this.debounceSubscription = this.debouncer.pipe(
      debounceTime(200)
    )
      .subscribe(value => {
        this.changeRegion.emit(value);
      })
  }

  ngOnDestroy(): void {
    this.debounceSubscription.unsubscribe();
  }

  expandDropdown(): void {
    this.expanded = !this.expanded;
  }

  dropdownClick(region: Region): void {
    if (region !== this.selectedRegion) {
      this.selectedRegion = region;
      this.countriesService.changeRegionFilter(region);
      this.debouncer.next(region);
    } else {
      return
    }
  }

}
