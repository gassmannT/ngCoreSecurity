import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  loggedIn = false;

  constructor() {}

  ngOnInit() {}

  login() {
    console.log('login');
  }

  logout() {
    console.log('login');
  }
}
