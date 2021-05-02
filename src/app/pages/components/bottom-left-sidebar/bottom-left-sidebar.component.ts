import { SidebarService } from 'src/app/services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { AnimBottomLeft, AnimFading } from 'src/app/app.animations';

@Component({
  selector: 'app-bottom-left-sidebar',
  templateUrl: './bottom-left-sidebar.component.html',
  styleUrls: ['./bottom-left-sidebar.component.scss'],
  animations: [
    AnimBottomLeft,
    AnimFading
  ]
})
export class BottomLeftSidebarComponent implements OnInit {
  constructor(public sidebarService: SidebarService) { }

  ngOnInit() { }
}
