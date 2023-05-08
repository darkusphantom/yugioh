import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { AuthState } from 'src/app/core/models/auth.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  authState: AuthState = {
    register: false,
    login: true,
    verify: false,
    checkCode: false,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((url: UrlSegment[]) => {
      const path = url[0].path;
      if (path === 'register') {
        this.authState = {
          ...this.authState,
          login: false,
          register: true,
        };
      }
    });
  }
}
