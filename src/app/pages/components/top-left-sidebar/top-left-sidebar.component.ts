import { SidebarService } from 'src/app/services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { AnimFading, AnimTopLeft } from 'src/app/app.animations';

@Component({
  selector: 'app-top-left-sidebar',
  templateUrl: './top-left-sidebar.component.html',
  styleUrls: ['./top-left-sidebar.component.scss'],
  animations: [
    AnimTopLeft,
    AnimFading
  ]
})
export class TopLeftSidebarComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit() {
  }

}
