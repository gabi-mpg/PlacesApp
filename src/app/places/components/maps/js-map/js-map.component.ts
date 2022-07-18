import { Component, Input, OnInit } from '@angular/core';
import { LocationPipe } from 'src/app/places/pipes/location.pipe'; 
import { Place } from 'src/app/places/interfaces/place-results.insterface';

@Component({
  selector: 'app-js-map',
  templateUrl: './js-map.component.html',
  styleUrls: ['./js-map.component.css']
})
export class JsMapComponent implements OnInit {

  @Input() places!: Place[];
  
  width = 800;
  height = 800;
  zoom = 9;
  title: string = 'Tittle';
  
  constructor() { }
  
  ngOnInit(): void {
    
  }
  
}
