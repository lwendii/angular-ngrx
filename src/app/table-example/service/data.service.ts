import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.URL).pipe(
      map((data) => {
        return data.map((item: any) => ({ ...item, city: item.address.city }));
      })
    );
  }
}
