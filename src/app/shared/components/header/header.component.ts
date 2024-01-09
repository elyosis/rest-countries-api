import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentTheme?: "light" | "dark";

  ngOnInit(): void {
    this.currentTheme = this.calculatePreferredTheme();
    document.body.setAttribute("data-theme", this.currentTheme);
  }

  calculatePreferredTheme() {
    const currentTheme = localStorage.getItem("color-theme");
    const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)")

    if (currentTheme === "light" || currentTheme === "dark") {
      return currentTheme;
    } else if (systemSettingLight.matches) {
      return "light";
    } else {
      return "dark";
    }
  }

  changeTheme(): void {
    this.currentTheme === "light" ? this.currentTheme = "dark" : this.currentTheme = "light";

    document.body.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem("color-theme", this.currentTheme);
  }

}
