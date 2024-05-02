import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../api/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'assets/apiClient.json';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
      return this.http.get<Client[]>(this.apiUrl);
  }
}
