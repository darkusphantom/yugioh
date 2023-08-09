import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  menuData = [
    {
      url: '/yugioh/type-card/normal monster',
      name: 'normal monster',
    },
    {
      url: '/yugioh/type-card/effect monster',
      name: 'effect monster',
    },
    {
      url: '/yugioh/type-card/spell card',
      name: 'spell card',
    },
    {
      url: '/yugioh/type-card/trap card',
      name: 'trap card',
    },
    {
      url: '/yugioh/type-card/fusion monster',
      name: 'fusion monster',
    },
    {
      url: '/yugioh/type-card/ritual monster',
      name: 'ritual monster',
    },
    {
      url: '/yugioh/type-card/synchro monster',
      name: 'synchro monster',
    },
    {
      url: '/yugioh/type-card/xyz monster',
      name: 'xyz monster',
    },
    {
      url: '/yugioh/type-card/link monster',
      name: 'link monster',
    },
  ];

  isShowMenu = false;
  constructor() {}

  ngOnInit(): void {}

  toggleShowMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
