import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userData } from '../modal/interface';
import { UserdataService } from '../Services/userdata.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private service: UserdataService) {}
  data!: userData[];
  userdata: any = [];
  approve: boolean = true;
  mark: boolean = false;
  paid: boolean = false;
  ngOnInit(): void {
    // this.data = this.service.userdata;
    this.service.getUserdata().subscribe((allData) => {
      // console.log(allData);
      this.userdata = allData;
    });
  }

  deleteUser(userID: userData) {
    this.service.deleteUser(userID).subscribe((result) => {
      this.ngOnInit();
    });
  }
  approve1() {
    this.approve = false;
    this.mark = true;
  }
  mark1() {
    this.mark = false;
    this.paid = true;
  }
}
