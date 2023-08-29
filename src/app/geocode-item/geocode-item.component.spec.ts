import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocodeItemComponent } from './geocode-item.component';

describe('GeocodeItemComponent', () => {
  let component: GeocodeItemComponent;
  let fixture: ComponentFixture<GeocodeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeocodeItemComponent]
    });
    fixture = TestBed.createComponent(GeocodeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
