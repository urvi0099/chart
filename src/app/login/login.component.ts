import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.formIntilizations();
  }
  formIntilizations() {
    this.loginform = this.fb.group({
      // username: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  loginuser() {
    // this.http
    //   .get<any>('https://632966514c626ff832c04a56.mockapi.io/admin')
    //   .subscribe(
    //     (res) => {
    //       const user = res.find((a: any) => {
    //         return (
    //           a.username === this.loginform.value.username &&
    //           a.password === this.loginform.value.password
    //         );
    //       });
    //       if (user) {
    //         this.loginform.reset();
    //         this.router.navigate(['admin']);
    //       } else {
    //         alert('user not found');
    //       }
    //     },
    //     (err) => {
    //       alert('something went wrong!!!');
    //     }
    //   );

    // console.log(this.loginform.value);
    let payload = this.loginform.value;
    localStorage.setItem('role', payload.password);

    if (payload.password) {
      localStorage.setItem('role', payload.password);
    }
    if (payload.password === 'admin') {
      this.router.navigate(['admin']);
    }
    // if (payload.password === 'account') {
    //   this.router.navigate(['accountant']);
    // }
    // if (payload.password === 'finance') {
    //   this.router.navigate(['finance']);
    // }
    // else {
    //   alert('kindly fill the correct password');
    //   this.loginform.reset();
    // }
    // if (payload.password === 'account') {
    //   this.router.navigate(['accountant']);
    // }
    // if (payload.password === 'finance') {
    //   this.router.navigate(['finance']);
    // }
  }
  get Username() {
    return this.loginform.get('username') as FormControl;
  }
  get Password() {
    return this.loginform.get('password') as FormControl;
  }
}
