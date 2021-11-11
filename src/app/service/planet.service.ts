import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetResponse } from '../interfaces/planet.interface';
const API_URL = "https://swapi.dev/api/planets/"
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(`${API_URL}`);
  }
}
