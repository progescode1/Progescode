import { Injectable } from '@angular/core';
import { Facture } from '../api/Facture';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiUrl = 'assets/apiFacture.json';

  constructor(private http: HttpClient) {}

  getFactures(): Observable<Facture[]> {
      return this.http.get<Facture[]>(this.apiUrl);
  }
}
