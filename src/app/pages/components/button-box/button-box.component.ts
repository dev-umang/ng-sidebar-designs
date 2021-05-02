import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.scss']
})
export class ButtonBoxComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

}
