import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApidataService {
  url = 'https://632966514c626ff832c04a56.mockapi.io/admin';
  constructor(private http: HttpClient) {}

  getApidata() {
    return this.http.get(this.url);
  }
}
