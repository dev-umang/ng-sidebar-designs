import { SidebarService } from 'src/app/services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { AnimFading, AnimTopLeft, AnimTopRight } from 'src/app/app.animations';

@Component({
  selector: 'app-top-right-sidebar',
  templateUrl: './top-right-sidebar.component.html',
  styleUrls: ['./top-right-sidebar.component.scss'],
  animations: [
    AnimTopRight,
    AnimFading
  ]
})
export class TopRightSidebarComponent implements OnInit {
  constructor(public sidebarService: SidebarService) { }

  ngOnInit() { }
}
