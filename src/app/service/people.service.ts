import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopletResponse, Person } from '../interfaces/people.interface';
const API_URL = "https://swapi.dev/api/people";
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPerson(): Observable<PeopletResponse>{
    return this.http.get<PeopletResponse>(`${API_URL}`);
  }
  getPersonDetail(id: number): Observable <Person>{
    return this.http.get<Person>(`${API_URL}/${id}`);
  }
}
