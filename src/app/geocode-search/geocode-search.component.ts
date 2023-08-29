import { Component, EventEmitter, Output } from '@angular/core';
import { MapGeocoder, MapGeocoderResponse } from '@angular/google-maps';
import { GoogleService } from '../service/google/google.service';
import { MapTimeZoneResponse } from '../entity/MapTimeZoneResponse';

@Component({
  selector: 'app-geocode-search',
  templateUrl: './geocode-search.component.html',
  styleUrls: ['./geocode-search.component.scss']
})
export class GeocodeSearchComponent {
  @Output() geocodeEvent = new EventEmitter<MapGeocoderResponse>();

  address!: string;

  constructor(private mapGeocoder: MapGeocoder) {

  }

  searchLocation() {
    this.mapGeocoder.geocode({ address: this.address, language: 'en' }).subscribe(
      {
        next: (data) => {
          this.geocodeEvent.emit(data);
        },
        error: (data) => {
          console.error(data);
        }
      }
    )
  }
}
