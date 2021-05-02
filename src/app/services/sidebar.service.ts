import { Injectable } from '@angular/core';
import { BRANDS_MENU } from '../Constants/brands';
import { LARGE_MENU } from '../Constants/largeMenu';
import { LargeMenu } from '../Models/largeMenu';
import { Menu } from '../Models/menu';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isLeft: boolean = false;
  isTop: boolean = false;
  isRight: boolean = false;
  isBottom: boolean = false;
  isFullpage: boolean = false;
  isTopLeft: boolean = false;
  isTopRight: boolean = false;
  isBottomLeft: boolean = false;
  isBottomRight: boolean = false;
  singleMenu: Menu[] = [];
  largeMenu: LargeMenu[] = [];

  constructor() {
    this.setSingleMenu();
    this.setLargeMenu();
  }

  private setLargeMenu() {
    this.largeMenu = LARGE_MENU;
  }

  private setSingleMenu() {
    this.singleMenu = BRANDS_MENU;
  }

  public toggleSidebar(sidebar: string) {
    switch (sidebar) {
      case 'fullpage':
        this.isFullpage = !this.isFullpage;
        break;
      case 'left':
        this.isLeft = !this.isLeft;
        break;

      case 'right':
        this.isRight = !this.isRight;
        break;
      case 'top-left':
        this.isTopLeft = !this.isTopLeft;
        break;
      case 'top-right':
        this.isTopRight = !this.isTopRight;
        break;
      case 'bottom-right':
        this.isBottomRight = !this.isBottomRight;
        break;
      case 'bottom-left':
        this.isBottomLeft = !this.isBottomLeft;
        break;
      case 'top':
        this.isTop = !this.isTop;
        break;
      case 'bottom':
        this.isBottom = !this.isBottom;
        break;
      default:
        break;
    }
  }
}
