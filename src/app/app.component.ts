import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Budget';
  toggleControl = new FormControl(true);
  @HostBinding('class') className = '';

  ngOnInit() {


  }
}
