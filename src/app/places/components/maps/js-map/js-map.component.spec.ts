import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsMapComponent } from './js-map.component';

describe('JsMapComponent', () => {
  let component: JsMapComponent;
  let fixture: ComponentFixture<JsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
