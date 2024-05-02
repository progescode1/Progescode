import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regime } from '../api/Regime';

@Injectable({
  providedIn: 'root'
})
export class RegimeService {

  private apiUrl = 'assets/apiRegime.json';

  constructor(private http: HttpClient) {}

  getRegimes(): Observable<Regime[]> {
      return this.http.get<Regime[]>(this.apiUrl);
  }
}
