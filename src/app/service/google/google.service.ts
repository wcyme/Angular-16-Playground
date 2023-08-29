import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapGeocoderResponse } from '@angular/google-maps';
import { MapTimeZoneResponse } from 'src/app/entity/MapTimeZoneResponse';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  apiKey: string = 'AIzaSyDelIt6o-Thr8kfolZLdkfphpjQluNmmjU';

  constructor(private http: HttpClient) { }

  getGeoCode(address: string, language: string = 'en') {
    return this.http.get<MapGeocoderResponse>("/google/map/geocode/json", {
      params: {
        address: address,
        key: this.apiKey,
        language: language,
      }
    });
  }

  private getTimeStampInSecond(dateTime: Date): number {
    return Math.round(dateTime.getTime() / 1000);
  }

  getTimeZoneData(location: google.maps.LatLng, dateTime: Date) {
    const params: HttpParams = new HttpParams({
      fromObject: {
        location: location.toUrlValue(),
        timestamp: this.getTimeStampInSecond(dateTime),
        key: this.apiKey
      }
    });

    return this.http.get<MapTimeZoneResponse>("/google/map/timezone/json", {
      params: params
    });
  }

  getZonedTime(mapTimeZoneResponse: MapTimeZoneResponse, dateTime: Date) {
    return dateTime.toLocaleString('en-us', { timeZone: mapTimeZoneResponse.timeZoneId });
  }
}
