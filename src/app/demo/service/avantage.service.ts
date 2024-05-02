import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Associe } from '../api/Associe';
import { Avantage } from '../api/Avantage';

@Injectable({
  providedIn: 'root'
})
export class AvantageService {

  
  private apiUrl = 'assets/apiAvantage.json';

  constructor(private http: HttpClient) {}

  getAvantages(): Observable<Avantage[]> {
      return this.http.get<Avantage[]>(this.apiUrl);
  }
}
