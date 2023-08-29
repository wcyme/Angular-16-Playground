import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vessel } from '../../entity/vessel';


@Injectable({
  providedIn: 'root'
})
export class VesselService {

  constructor(private http: HttpClient) { }

  getAllVessel(): Observable<Vessel[]> {
    return this.http.get<Vessel[]>("/api/vessel", { observe: 'body' });
  }

  createRandomVessel(): Observable<Vessel> {
    return this.http.get<Vessel>("/api/vessel/create", { observe: 'body' });
  }

  updateVessel(vessel: Vessel): Observable<Vessel> {
    return this.http.post<Vessel>("/api/vessel", vessel, { observe: 'body' })
  }

  getVessel(id: number): Observable<Vessel> {
    return this.http.get<Vessel>(`/api/vessel/${id}`, { observe: 'body' })
  }

}
