import { Component } from '@angular/core';
import { MapGeocoderResponse } from '@angular/google-maps';
import { CustomGeocoderResult } from '../entity/CustomGeocoderResult';
import { GoogleService } from '../service/google/google.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})

export class GoogleMapComponent {

  time: Date = new Date();

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 22.41502342080393,
    lng: 114.13203249187043
  };
  zoom = 10;

  localTimeDictionary: Map<google.maps.LatLng, google.maps.MarkerOptions> = new Map();

  customGeocodeData: CustomGeocoderResult[] = [];

  constructor(private googleService: GoogleService) {

  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  addMarker(geoCoderData: MapGeocoderResponse) {
    geoCoderData.results
      .forEach((geoCoderData) => {
        if (!this.customGeocodeData.map((data) => data.place_id)
          .includes(geoCoderData.place_id)) {
          this.customGeocodeData.push(geoCoderData);
        }
      });
  }

  getCheckedGeocodeData(): google.maps.LatLng[] {
    return this.customGeocodeData
      .filter((data) => data.isChecked)
      .map((data) => data.geometry.location);
  }

  getMarkerOptions(location: google.maps.LatLng): google.maps.MarkerOptions {
    if (!this.localTimeDictionary.has(location)) {
      this.googleService.getTimeZoneData(location, this.time).subscribe({
        next: (data) => {
          const localTime = this.googleService.getZonedTime(data, this.time);
          this.localTimeDictionary.set(location, { draggable: false, label: localTime })
        }
      });
    }

    return this.localTimeDictionary.get(location) || { draggable: false };
  }

}
