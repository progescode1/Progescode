import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../api/Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'assets/apiService.json';

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
      return this.http.get<Service[]>(this.apiUrl);
  }
}
