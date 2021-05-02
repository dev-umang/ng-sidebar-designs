import { SidebarService } from 'src/app/services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { AnimFading, AnimZoom } from 'src/app/app.animations';

@Component({
  selector: 'app-fullpage-sidebar',
  templateUrl: './fullpage-sidebar.component.html',
  styleUrls: ['./fullpage-sidebar.component.scss'],
  animations: [
    AnimZoom,
    AnimFading
  ]
})
export class FullpageSidebarComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit() {
  }

}
