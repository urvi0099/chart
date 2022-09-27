import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  Admin = localStorage.getItem('role') === 'admin';
  // Admin = localStorage.getItem('admin') === 'admin';
  // Finance = localStorage.getItem('role') === 'finance';
  // Accountant = localStorage.getItem('role') === 'account';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  loginn() {}
}
