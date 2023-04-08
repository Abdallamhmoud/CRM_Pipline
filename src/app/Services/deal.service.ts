import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDeal } from '../Models/i-deal';

@Injectable({
  providedIn: 'root'
})
export class DealService {
  // apiUrl = 'https://my-json-server.typicode.com/mabukoush1/contacts/db';
  constructor(private http: HttpClient) {
    console.log(environment.APIBaseURL);
    
   }
   getDeals(): Observable<IDeal[]> {
    return this.http.get<IDeal[]>(`${environment.APIBaseURL}/deals`);
  }

  // searchDeals(searchTerm: string): Observable<any> {
  //   // Implement search functionality here
  // }
}
