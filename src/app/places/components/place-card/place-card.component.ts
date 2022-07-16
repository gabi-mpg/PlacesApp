import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../interfaces/place-results.insterface';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css'],
  styles: [
    `
      mat-card {
        margin-top: 20px;
        width: 13rem;
      }
    `,
  ],
})
export class PlaceCardComponent implements OnInit {

  @Input() place!: Place;
  
  constructor() { }

  ngOnInit(): void {
  }

}
