import { Injectable } from '@angular/core';
import { Debour } from '../api/Debour';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebourService {
  private apiUrl = 'assets/apiDebour.json';

  constructor(private http: HttpClient) {}

  getDebours(): Observable<Debour[]> {
      return this.http.get<Debour[]>(this.apiUrl);
  }
}
