import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../interfaces/place-results.insterface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  styles: [
    `
    `,
  ],
})
export class ListComponent implements OnInit {
  @Input() places: Place[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
