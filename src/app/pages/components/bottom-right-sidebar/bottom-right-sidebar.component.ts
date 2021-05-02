import { SidebarService } from 'src/app/services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { AnimBottomRight, AnimFading } from 'src/app/app.animations';

@Component({
  selector: 'app-bottom-right-sidebar',
  templateUrl: './bottom-right-sidebar.component.html',
  styleUrls: ['./bottom-right-sidebar.component.scss'],
  animations: [
    AnimBottomRight,
    AnimFading
  ]
})
export class BottomRightSidebarComponent implements OnInit {
  constructor(public sidebarService: SidebarService) { }

  ngOnInit() { }
}
