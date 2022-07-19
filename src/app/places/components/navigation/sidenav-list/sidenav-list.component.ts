import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})

/**
 * This class creates the Navigation Menu displayed in small screens
 * with the different website menu links.
 */
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * This method receives and triggers the action to perform when a user clicks on the component
   */
  onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
