import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = [
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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
