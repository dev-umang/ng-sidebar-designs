import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-large-menu',
  templateUrl: './large-menu.component.html',
  styleUrls: ['./large-menu.component.scss']
})
export class LargeMenuComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit() {
  }

}
