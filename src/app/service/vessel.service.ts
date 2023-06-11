import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vessel } from '../entity/vessel';


@Injectable({
  providedIn: 'root'
})
export class VesselService {

  constructor(private http: HttpClient) { }

  getAllVessel(): Observable<HttpResponse<Vessel>> {
    return this.http.get<Vessel>(
     "/api/vessel", { observe: 'response' });
  }
}
