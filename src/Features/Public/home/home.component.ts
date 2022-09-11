import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toggleControl = new FormControl(true);
  @HostBinding('class') className = '';
  constructor() { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'theme-alternate';
      this.className = darkMode ? '' : darkClassName;
    });
  }

  openLogin() {
    // route to login
  }
}
