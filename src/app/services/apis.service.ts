import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  allURL:any = "http://localhost:3000/posts"
  constructor(private http: HttpClient) { }

  userData(): Observable<any> {
    return this.http.get(this.allURL);
  }

  userDetails(id): Observable<any> {
    return this.http.get(`${this.allURL}?id=${id}`);
  }

  userAdd(input){
    return this.http.post(this.allURL, input);
  }

  userDelete(id): Observable<any> {
    return this.http.delete(`${this.allURL}/${id}`);
  }

  userUpdate(id, input){
    return this.http.put(`${this.allURL}/${id}`, input);
  }
}
