import { SidebarService } from 'src/app/services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { AnimFading, AnimRight } from 'src/app/app.animations';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
  animations: [
    AnimRight,
    AnimFading,
  ]
})
export class RightSidebarComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

}
