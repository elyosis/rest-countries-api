import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'countries-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() country! : Country;

  constructor (private router: Router) {}

  navigateCard() {
    return this.router.navigate(["countries", this.country.cca3])
  }
}
