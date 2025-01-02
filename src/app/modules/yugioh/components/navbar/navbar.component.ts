import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isShowMenu = false;
  constructor() {}

  ngOnInit(): void {}

  toggleShowMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
