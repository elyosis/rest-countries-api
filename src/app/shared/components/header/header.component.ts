import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentTheme: "light" | "dark" = "dark";

  changeTheme(): void {
    this.currentTheme === "light" ? this.currentTheme = "dark" : this.currentTheme = "light";

    document.body.setAttribute('data-theme', this.currentTheme);
  }

}
