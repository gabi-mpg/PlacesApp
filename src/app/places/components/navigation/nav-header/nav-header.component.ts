import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css'],
})

/**
 * This class creates the Navigation Menu displayed for large and medium screens
 * with the different website links
 */
export class NavHeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  /**
   * This method receives and triggers the action to perform when a user clicks on the component
   */
  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
