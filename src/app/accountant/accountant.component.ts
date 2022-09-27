import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userData } from '../modal/interface';
import { UserdataService } from '../Services/userdata.service';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css'],
})
export class AccountantComponent implements OnInit {
  constructor(private router: Router, private service: UserdataService) {}
  data!: userData[];
  userdata: any = [];
  ngOnInit(): void {
    // this.data = this.service.userdata;
    // this.service.getUserdata().subscribe((allData) => {
    //   console.log(allData);
    //   this.userdata = allData;
    // });
  }
}
