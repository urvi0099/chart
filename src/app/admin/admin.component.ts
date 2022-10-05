import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userData } from '../modal/interface';
import { UserdataService } from '../Services/userdata.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private router: Router,
    private service: UserdataService,
    private route: ActivatedRoute
  ) {}
  data!: userData[];
  userdata: any = [];
  id: any;
  approve: boolean = true;
  mark: boolean = false;
  paid: boolean = false;
  ngOnInit(): void {
    // this.data = this.service.userdata;
    this.service.getUserdata().subscribe((allData) => {
      this.userdata = allData;
    });
    // this.updatedata();
    // this.loadData();
  }

  deleteUser(userID: userData) {
    this.service.deleteUser(userID).subscribe((result) => {
      this.ngOnInit();
    });
  }
  approve1(userID: userData) {
     this.approve = false;
    this.mark = true;
    this.service.getUserdataById(userID).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });

    // localStorage.setItem('approve', JSON.stringify(this.approve));
    // localStorage.setItem('mark', JSON.stringify(this.mark));
  }
  mark1(userID: userData) {
    this.mark = false;
    this.paid = true;
    // this.service.getUserdataById(userID).subscribe((res) => {
    //   console.log(res);
    //   this.ngOnInit();
    // });
    // localStorage.setItem('mark1', JSON.stringify(this.mark));
    // localStorage.setItem('paid', JSON.stringify(this.paid));
  }
  loadData() {
    let approve = JSON.parse(localStorage.getItem('approve')!);
    let mark = JSON.parse(localStorage.getItem('mark')!);
    let mark1 = JSON.parse(localStorage.getItem('mark1')!);
    let paid = JSON.parse(localStorage.getItem('paid')!);
    this.approve = approve;
    this.mark = mark;
    this.paid = paid;
    this.mark = mark1;
  }
  // updatedata(userID: userData) {
  //   this.service.getUserdataById(userID).subscribe((result) => {
  //     console.log(result);
  //     this.ngOnInit();
  //   });
  // }
}
