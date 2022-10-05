import { Injectable } from '@angular/core';
import { userData } from '../modal/interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  // url = 'http://localhost:3000/loginuser';
  url = 'https://632966514c626ff832c04a56.mockapi.io/users';
  userdata: any;
  constructor(private http: HttpClient) {}
  // userdata: userData[] = [
  //   {
  //     id: 1,
  //     submitted_by: 'string',
  //     event_name: 'string',
  //     spend_purpose: 'string',
  //     eo_category: 'string',
  //     pay_to: 'string',
  //     amount: 2323,
  //     status: 'string',
  //   },
  // ];
  // addUserdata(data: userData) {
  //   if (!data.id) data.id = this.userdata.length + 1;
  //   this.userdata.push(data);
  // }
  getUserdata() {
    return this.http.get(this.url);
  }
  saveUserdata(data: userData) {
    // console.log(data);
    return this.http.post(this.url, data);
  }
  deleteUser(id: userData) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getUserdataById(id: userData) {
    return this.http.get(`${this.url}/${id}`);
  }
  editUserdata() {}
}
