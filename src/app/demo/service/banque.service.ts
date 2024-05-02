import { Injectable } from '@angular/core';
import { Banque } from '../api/Banque';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {
  private apiUrl = 'assets/apiBanque.json';

  constructor(private http: HttpClient) {}

  getBanques(): Observable<Banque[]> {
      return this.http.get<Banque[]>(this.apiUrl);
  }
}
