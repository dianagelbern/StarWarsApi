import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse, Person } from '../interfaces/people.interface';
const API_URL = "https://swapi.dev/api/people";
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPerson(): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${API_URL}`);
  }
  getPersonDetail(id: number): Observable <Person>{
    return this.http.get<Person>(`${API_URL}/${id}`);
  }
}
