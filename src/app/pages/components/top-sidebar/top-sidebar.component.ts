import { SidebarService } from './../../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { AnimFading, AnimTop } from 'src/app/app.animations';

@Component({
  selector: 'app-top-sidebar',
  templateUrl: './top-sidebar.component.html',
  styleUrls: ['./top-sidebar.component.scss'],
  animations: [
    AnimTop,
    AnimFading
  ]
})
export class TopSidebarComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

}
