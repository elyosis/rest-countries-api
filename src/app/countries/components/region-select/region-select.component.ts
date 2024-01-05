import { Component } from '@angular/core';

import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-region-select',
  templateUrl: './region-select.component.html',
  styleUrls: ['./region-select.component.css']
})
export class RegionSelectComponent {
  regions: Region[] = ["all", "africa", "americas", "asia", "europe", "oceania"];
  selectedRegion: Region = "all";
  expanded: boolean = false;

  expandDropdown(): void {
    this.expanded = !this.expanded;
  }

  dropdownClick(region?: Region):void {
    // TODO: add debouncing
    if (region && region !== this.selectedRegion) {
      this.selectedRegion = region;
      console.log(this.selectedRegion);
    } else if (region === "all") {
      this.selectedRegion = region;
    } else  {
      return
    }
  }

}
