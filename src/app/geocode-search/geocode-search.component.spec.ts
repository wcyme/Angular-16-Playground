import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocodeSearchComponent } from './geocode-search.component';

describe('GeocodeSearchComponent', () => {
  let component: GeocodeSearchComponent;
  let fixture: ComponentFixture<GeocodeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeocodeSearchComponent]
    });
    fixture = TestBed.createComponent(GeocodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
