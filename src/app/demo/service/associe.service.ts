import { Injectable } from '@angular/core';
import { Associe } from '../api/Associe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssocieService {
  private apiUrl = 'assets/apiAssocie.json';

  constructor(private http: HttpClient) {}

  getAssocies(): Observable<Associe[]> {
      return this.http.get<Associe[]>(this.apiUrl);
  }
}
