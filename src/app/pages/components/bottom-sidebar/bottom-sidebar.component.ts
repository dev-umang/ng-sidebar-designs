import { SidebarService } from 'src/app/services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { AnimBottom, AnimFading } from 'src/app/app.animations';

@Component({
  selector: 'app-bottom-sidebar',
  templateUrl: './bottom-sidebar.component.html',
  styleUrls: ['./bottom-sidebar.component.scss'],
  animations: [
    AnimBottom,
    AnimFading
  ]
})
export class BottomSidebarComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit() {
  }

}
