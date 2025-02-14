import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: false
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
  }
}
