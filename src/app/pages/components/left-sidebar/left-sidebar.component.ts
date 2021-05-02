import { Component, OnInit } from '@angular/core';
import { AnimFading, AnimLeft } from 'src/app/app.animations';
import { Menu } from 'src/app/Models/menu';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
  animations: [
    AnimLeft,
    AnimFading
  ]
})
export class LeftSidebarComponent implements OnInit {
  menu: Menu[] = [];
  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void { }
}
