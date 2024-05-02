import { Injectable } from '@angular/core';
import { Cabinet } from '../api/Cabinet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  private apiUrl = 'assets/apiCabinet.json';

  constructor(private http: HttpClient) {}

  getCabinets(): Observable<Cabinet[]> {
      return this.http.get<Cabinet[]>(this.apiUrl);
  }
}
