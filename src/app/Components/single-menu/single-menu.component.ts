import { SidebarService } from 'src/app/services/sidebar.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.scss'],
})


export class SingleMenuComponent implements OnInit {

  @Input() direction?: string;
  constructor(public sidebarService: SidebarService) { }


  ngOnInit() { }

  getClassName() {
    return this.direction === "right" ? "menu flex-end" : "menu flex-start";
  }
}
